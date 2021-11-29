<template>
  <div style="margin: 50px;">
<h1 class="header center orange-text"> {{ message[currentLocale].form.backup.title }}</h1>
      <div class="row center">
        <h5 class="header col s12 light">{{ message[currentLocale].form.backup.explication }}</h5>
      </div>
  <div class="row">
    <div class="input-field col s6">
      <input placeholder="" v-model="accountLogicalName" type="text" />
      <label for="AccountLogicalName">{{ message[currentLocale].form.backup.AccountLogicalName }}</label>
    </div>
    <div class="input-field col s6">
      <input placeholder="" v-model="clientId" type="text" />
      <label for="ClientId">{{ message[currentLocale].form.backup.ClientId }}</label>
    </div>
  </div>
  <div class="row">
    <div class="input-field col s6">
      <input placeholder="" v-model="userKey" type="text" />
      <label for="UserKey_RefreshToken">{{ message[currentLocale].form.backup.UserKey }}</label>
    </div>
    <div class="input-field col s6">
      <input placeholder="" v-model="tenantName" type="text" />
      <label for="TenantName">{{ message[currentLocale].form.backup.TenantName }}</label>
    </div>
  </div>
  <div class="row">
    <div class="input-field col s12">
      <h5>
        https://cloud.uipath.com/{{ accountLogicalName }}/{{ tenantName }}
      </h5>
      <p>token : {{ token }}</p>
    </div>
  </div>
  <div class="row">
    <div class="input-field col s6">
      <button
        class="btn-large waves-effect waves-light orange"
        @click="checkOrchestrator"
      >
        Test
      </button>
      <h5>{{ txtGetToken }}</h5>
      <p>{{ txtGetTokenError }}</p>
      <h5>{{ txtGetFolders }}</h5>
      <p>{{ txtGetFoldersError }}</p>
    </div>
    <div class="input-field col s6" v-show="ApiOk === true">
      <button class="btn-large waves-effect waves-light orange" @click="RunAPI">
        Download JSON File
      </button>
      <p v-for="(line, index) in tabAvancementRq" :key="index">{{ line }}</p>
    </div>
  </div>
  </div>
</template>



<script>
var FileSaver = require('file-saver');
const { DateTime } = require("luxon");
export default {
  name: "Form_GetOrchestrator",
  data() {
    return {
      token: "",
      accountLogicalName: "",
      clientId: "",
      userKey: "",
      tenantName: "",
      txtGetToken: "",
      txtGetTokenError: "",
      txtGetFolders: "",
      txtGetFoldersError: "",
      ApiOk: false,
      tabAvancementRq : []  ,
      JsonRaw: {},
    };
  },
  methods: {
      
    async RunAPI() {
        function UpdateTab(txt,tabAvancementRq){
          let now = DateTime.now()
          let timestamp = now.toISODate()+" "+now.toISOTime()
            tabAvancementRq.splice(0,0,timestamp + " : "+txt)
            return tabAvancementRq
      }
        this.tabAvancementRq=[];
        this.tabAvancementRq = UpdateTab("début de la demande de token",this.tabAvancementRq)
        let rawGetTokent = JSON.stringify({
        url: "https://account.uipath.com/oauth/token",
        methode: "POST",
        head: [
          "X-UIPATH-TenantName : " + this.tenantName,
          "Content-Type: application/json",
        ],
        body: {
          grant_type: "refresh_token",
          client_id: this.clientId,
          refresh_token: this.userKey,
        },
      });

      let requestOptions = {
        method: "get",
        headers: {},
        redirect: "follow",
      };
      const responseToken = await fetch(
        "/form1.php?rq=" + rawGetTokent,
        requestOptions
      );
      const resultToken = await responseToken.text();
      this.token = JSON.parse(resultToken).access_token;
        this.tabAvancementRq = UpdateTab("Fin de la demande de token",this.tabAvancementRq)
        this.tabAvancementRq = UpdateTab("Début de la récupération des Dossiers",this.tabAvancementRq)
      let rawGetFolders = JSON.stringify({
        url:
          "https://platform.uipath.com/" +
          this.accountLogicalName +
          "/" +
          this.tenantName +
          "/odata/folders",
        methode: "GET",
        head: [
          "X-UIPATH-TenantName: " + this.tenantName,
          "Authorization: Bearer " + this.token,
          "Content-Type: application/json",
        ],
        body: {},
      });

      const responseFolders = await fetch(
        "/form1.php?rq=" + rawGetFolders,
        requestOptions
      );
      const resultFolders = await responseFolders.text();
      let folders = JSON.parse(resultFolders).value;
       this.tabAvancementRq = UpdateTab("Fin de la récupération des Dossiers",this.tabAvancementRq)
      for (let index = 0; index < folders.length; index++) {
        let folder = folders[index];
        let Id = folder.Id;
         this.tabAvancementRq = UpdateTab("Début de l'analyse du dossier : "+folder.FullyQualifiedName+"(Id="+Id+")",this.tabAvancementRq)
         this.tabAvancementRq = UpdateTab("Récupération des assets(Resources)",this.tabAvancementRq)
        /*             Assets                */
        let rawGetAssets = JSON.stringify({
          url:
            "https://platform.uipath.com/" +
            this.accountLogicalName +
            "/" +
            this.tenantName +
            "/odata/Assets",
          methode: "GET",
          head: [
            "X-UIPATH-TenantName: " + this.tenantName,
            "X-UIPATH-OrganizationUnitId: " + Id,
            "Authorization: Bearer " + this.token,
            "Content-Type: application/json",
          ],
          body: {},
        });
        const responseAssets = await fetch(
          "/form1.php?rq=" + rawGetAssets,
          requestOptions
        );
        const resultAssets = await responseAssets.text();
        let assets = JSON.parse(resultAssets).value;
        folders[index].Assets = assets;

        /*             Processes                */
        this.tabAvancementRq = UpdateTab("Récupération des Processes",this.tabAvancementRq)
        let rawGetProcesses = JSON.stringify({
          url:
            "https://platform.uipath.com/" +
            this.accountLogicalName +
            "/" +
            this.tenantName +
            "/odata/Processes",
          methode: "GET",
          head: [
            "X-UIPATH-TenantName: " + this.tenantName,
            "X-UIPATH-OrganizationUnitId: " + Id,
            "Authorization: Bearer " + this.token,
            "Content-Type: application/json",
          ],
          body: {},
        });
        const responseProcesses = await fetch(
          "/form1.php?rq=" + rawGetProcesses,
          requestOptions
        );
        const resultProcesses = await responseProcesses.text();
        let processes = JSON.parse(resultProcesses).value;
        folders[index].Processes = processes;

        /*             QListe Transaction Item                */
        this.tabAvancementRq = UpdateTab("Récupération des QListes",this.tabAvancementRq)
        let rawGetQListes = JSON.stringify({
          url:
            "https://platform.uipath.com/" +
            this.accountLogicalName +
            "/" +
            this.tenantName +
            "/odata/QueueDefinitions",
          methode: "GET",
          head: [
            "X-UIPATH-TenantName: " + this.tenantName,
            "X-UIPATH-OrganizationUnitId: " + Id,
            "Authorization: Bearer " + this.token,
            "Content-Type: application/json",
          ],
          body: {},
        });
        const responseQListes = await fetch(
          "/form1.php?rq=" + rawGetQListes,
          requestOptions
        );
        const resultQListes = await responseQListes.text();
        let qListes = JSON.parse(resultQListes).value;
        folders[index].QListes = qListes;

        /*             Robots                */
        this.tabAvancementRq = UpdateTab("Récupération des Robots",this.tabAvancementRq)
        let rawGetRobots = JSON.stringify({
          url:
            "https://platform.uipath.com/" +
            this.accountLogicalName +
            "/" +
            this.tenantName +
            "/odata/Robots",
          methode: "GET",
          head: [
            "X-UIPATH-TenantName: " + this.tenantName,
            "X-UIPATH-OrganizationUnitId: " + Id,
            "Authorization: Bearer " + this.token,
            "Content-Type: application/json",
          ],
          body: {},
        });
        const responseRobots = await fetch(
          "/form1.php?rq=" + rawGetRobots,
          requestOptions
        );
        const resultRobots = await responseRobots.text();
        let robots = JSON.parse(resultRobots).value;
        folders[index].Robots = robots;

         /*             Roles                */
         this.tabAvancementRq = UpdateTab("Récupération des Roles des Utilisateurs",this.tabAvancementRq)
        let rawGetRoles = JSON.stringify({
          url:
            "https://platform.uipath.com/" +
            this.accountLogicalName +
            "/" +
            this.tenantName +
            "/odata/Folders/UiPath.Server.Configuration.OData.GetUsersForFolder(key="+Id+",includeInherited=true)",
          methode: "GET",
          head: [
            "X-UIPATH-TenantName: " + this.tenantName,
            //"X-UIPATH-OrganizationUnitId: " + Id,
            "Authorization: Bearer " + this.token,
            "Content-Type: application/json",
          ],
          body: {},
        });
        const responseRoles = await fetch(
          "/form1.php?rq=" + rawGetRoles,
          requestOptions
        );
        const resultRoles= await responseRoles.text();
        let roles = JSON.parse(resultRoles).value;
        folders[index].Roles = roles;

         /*             Machines                */
         this.tabAvancementRq = UpdateTab("Récupération des Machines",this.tabAvancementRq)
        let rawGetMachines = JSON.stringify({
          url:
            "https://platform.uipath.com/" +
            this.accountLogicalName +
            "/" +
            this.tenantName +
            "/odata/Machines",
          methode: "GET",
          head: [
            "X-UIPATH-TenantName: " + this.tenantName,
            "X-UIPATH-OrganizationUnitId: " + Id,
            "Authorization: Bearer " + this.token,
            "Content-Type: application/json",
          ],
          body: {},
        });
        const responseMachines = await fetch(
          "/form1.php?rq=" + rawGetMachines,
          requestOptions
        );
        const resultMachines= await responseMachines.text();
        let machines = JSON.parse(resultMachines).value;
        folders[index].Machines = machines;

        this.tabAvancementRq = UpdateTab("Fin de l'analyse du dossier : "+folder.FullyQualifiedName+"(Id="+Id+")",this.tabAvancementRq)
      }
      this.AncienStrct = folders;
      console.log(folders);

      var file = new File([JSON.stringify(folders, undefined,5)], "Orchestrator.json", {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(file);

    },
     async checkOrchestrator() {
      this.token = ""
      this.txtGetFolders = ""
      this.txtGetFoldersError = ""
      this.txtGetTokenError = ""
      this.txtGetToken = "Récupération Token :"
      this.ApiOk = false
      let raw = JSON.stringify({
        "url": "https://account.uipath.com/oauth/token",
        "methode": "POST",
        "head": [
          "X-UIPATH-TenantName : " + this.tenantName,
          'Content-Type: application/json'
        ],
        "body": {
          "grant_type": "refresh_token",
          "client_id": this.clientId,
          "refresh_token": this.userKey
        }

      });

      let requestOptions = {
        method: 'get',
        headers: {},
        redirect: 'follow',
      };
      //console.log("requestOptions",requestOptions)

      const response = await fetch("/form1.php?rq=" + raw, requestOptions)
      const result = await response.text()
      try {
        this.token = JSON.parse(result).access_token
        if (this.token == undefined) {
          throw ("Fail Get Token")
        }
        this.txtGetToken += " Réussite"
        this.txtGetFolders = "Get List Folders : "
        let raw2 = JSON.stringify({
          "url": "https://platform.uipath.com/" + this.accountLogicalName + "/" + this.tenantName + "/odata/folders",
          "methode": "GET",
          "head": [
            "X-UIPATH-TenantName: " + this.tenantName,
            'Authorization: Bearer ' + this.token,
            'Content-Type: application/json'
          ],
          "body": {}
        });

        let requestOptions2 = {
          method: 'get',
          headers: {},
          redirect: 'follow',
        };
        const response2 = await fetch("/form2.php?rq=" + raw2, requestOptions2)
        const result2 = await response2.text()
        try {

          let data = JSON.parse(result2).value;
          this.txtGetFolders += "Folders(" + data.length + ")";
          this.ApiOk = true
        } catch (error) {
          this.txtGetFoldersError = result2
          this.txtGetFolders += "Fail"
        }


      } catch (error) {
        this.txtGetTokenError = result
        this.txtGetToken += "Fail"
      }
    }
  },
  props: {
    message: Object,
    currentLocale : String
  }

};
</script>