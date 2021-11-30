<template>
  <div style="margin: 50px">
    <h1 class="header center orange-text">
      {{ message[currentLocale].form.projet.title }}
    </h1>
    <div class="row center">
      <h5 class="header col s12 light">
        {{ message[currentLocale].form.projet.explication }}
      </h5>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input placeholder="" v-model="accountLogicalName" type="text" />
        <label for="AccountLogicalName">{{
          message[currentLocale].form.projet.AccountLogicalName
        }}</label>
      </div>
      <div class="input-field col s6">
        <input placeholder="" v-model="clientId" type="text" />
        <label for="ClientId">{{
          message[currentLocale].form.projet.ClientId
        }}</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input placeholder="" v-model="userKey" type="text" />
        <label for="UserKey_RefreshToken">{{
          message[currentLocale].form.projet.UserKey
        }}</label>
      </div>
      <div class="input-field col s6">
        <input placeholder="" v-model="tenantName" type="text" />
        <label for="TenantName">{{
          message[currentLocale].form.projet.TenantName
        }}</label>
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
      <div class="input-field col s12">
        <button
          class="btn-large waves-effect waves-light orange col s12"
          @click="checkOrchestrator"
        >
          Test
        </button>
        <h5>{{ txtGetToken }}</h5>
        <p>{{ txtGetTokenError }}</p>
        <h5>{{ txtGetFolders }}</h5>
        <p>{{ txtGetFoldersError }}</p>
      </div>
      <div v-show="ApiOk === true">
        <div class="row">
          <div
            class="input-field col s12"
            v-for="(value, name) in Champs"
            :key="name"
          >
            <input placeholder="" v-model="ChampsValue[value]" type="text" />
            <label :for="name">{{ name }}</label>
          </div>
        </div>
        <div class="input-field col s12">
          <button
            class="btn-large waves-effect waves-light orange col s12"
            @click="CreateProjet"
          >
            Define Variables Projet
          </button>
          <p>
            statusProjet : {{ statusProjet }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Form_Projet",
  data() {
    return {
      token: "",
      accountLogicalName: "MyCompagny",
      clientId: "8DEv1AMNXczW3y4U15LL3jYXXXXXXX",
      userKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      tenantName: "DefaultTenant",
      txtGetToken: "",
      txtGetTokenError: "",
      txtGetFolders: "",
      txtGetFoldersError: "",
      ApiOk: false,
      IdFolder: 0,
      JsonRaw: {},
      Envs_JSON : [],
      TemplateQlist: "",
      TemplateFolder: "",
      Champs: {},
      ChampsValue: [],
      statusProjet : ""
    };
  },
  methods: {
    async GetAssets(token, Id) {
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
          "Authorization: Bearer " + token,
          "Content-Type: application/json",
        ],
        body: {},
      });
      let requestOptions = {
        method: "get",
        headers: {},
        redirect: "follow",
      };
      const responseAssets = await fetch(
        "/form1.php?rq=" + rawGetAssets,
        requestOptions
      );
      const resultAssets = await responseAssets.text();
      try {
        return JSON.parse(resultAssets).value;
      } catch (error) {
        return undefined;
      }
    },
    async GetToken() {
      let raw = JSON.stringify({
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
      //console.log("requestOptions",requestOptions)

      const response = await fetch("/form1.php?rq=" + raw, requestOptions);
      const result = await response.text();
      try {
        return JSON.parse(result).access_token;
      } catch {
        return undefined;
      }
    },
    async MkdirFolder(name, token, FolderId) {
      let body = {
        DisplayName: name,
        Description: "Folder Of Configuration",
        ProvisionType: "Automatic",
        PermissionModel: "FineGrained",
        ParentId: FolderId,
      };
      let raw = JSON.stringify({
        url:
          "https://platform.uipath.com/" +
          this.accountLogicalName +
          "/" +
          this.tenantName +
          "/odata/folders",
        methode: "POST",
        head: [
          "X-UIPATH-TenantName: " + this.tenantName,
          "Authorization: Bearer " + token,
          "Content-Type: application/json",
        ],
        body: body,
      });
      let requestOptions2 = {
        method: "get",
        headers: {},
        redirect: "follow",
      };
      const response2 = await fetch("/form1.php?rq=" + raw, requestOptions2);
      const result2 = await response2.text();
      try {
        let res = JSON.parse(result2);
        //console.log(res);
        return res.Id;
      } catch (error) {
        return undefined;
      }
    },
    async GetFolders(token) {
      let raw2 = JSON.stringify({
        url:
          "https://platform.uipath.com/" +
          this.accountLogicalName +
          "/" +
          this.tenantName +
          "/odata/folders",
        methode: "GET",
        head: [
          "X-UIPATH-TenantName: " + this.tenantName,
          "Authorization: Bearer " + token,
          "Content-Type: application/json",
        ],
        body: {},
      });

      let requestOptions2 = {
        method: "get",
        headers: {},
        redirect: "follow",
      };
      const response2 = await fetch("/form1.php?rq=" + raw2, requestOptions2);
      const result2 = await response2.text();
      //console.log("result2 := ",result2)
      return JSON.parse(result2).value;
    },
    async CreateQList(token, idFolder, name) {
      let body = {
        Name: name,
        Description: name,
        MaxNumberOfRetries: 0,
        AcceptAutomaticallyRetry: false,
        EnforceUniqueReference: false,
      };
      let raw2 = JSON.stringify({
        url:
          "https://platform.uipath.com/" +
          this.accountLogicalName +
          "/" +
          this.tenantName +
          "/odata/QueueDefinitions",
        methode: "POST",
        head: [
          "X-UIPATH-TenantName: " + this.tenantName,
          "Authorization: Bearer " + token,
          "X-UIPATH-OrganizationUnitId: " + idFolder,
          "Content-Type: application/json",
        ],
        body: body,
      });

      let requestOptions2 = {
        method: "get",
        headers: {},
        redirect: "follow",
      };
      const response2 = await fetch("/form1.php?rq=" + raw2, requestOptions2);
      const result2 = await response2.text();
      return JSON.parse(result2);
    },
    async IfFolderExist(folder) {
      let token = await this.GetToken();
      let folders = await this.GetFolders(token);
      //console.log(folders)
            for (let index = 0; index < folders.length; index++) {
        const element = folders[index];
        if (element.FullyQualifiedName.toLowerCase() == folder.toLowerCase()) return true;
      }
      return false;
    },
    async FolderGetId(folder) {
      let token = await this.GetToken();
      let folders = await this.GetFolders(token);
      //console.log(folders)
      for (let index = 0; index < folders.length; index++) {
        const element = folders[index];
        if (element.FullyQualifiedName.toLowerCase() == folder.toLowerCase()) return element.Id;
      }
      return null;
    },
    async CreateProjet() {
      this.statusProjet = "Analyse en cours"
      let state = true;

      for (let index = 0; index < this.ChampsValue.length; index++) {
        this.ChampsValue[index] = this.ChampsValue[index].trim();
        if (this.ChampsValue[index].length == 0) state = false;
      }
      if (state) {
          this.statusProjet = "Création en cours"
        let token = await this.GetToken();
        for (let i = 0; i < this.Envs_JSON.length; i++) {
          const env = this.Envs_JSON[i].name;
          //console.log("this.Envs_JSON[i] = ", this.Envs_JSON[i])
          //console.log("env= ", env)
          let templateFolder = this.TemplateFolder;
          let templateQlist = this.TemplateQlist;

          let regexEnv = new RegExp("{{Env}}", "gi");
          templateFolder = templateFolder.replace(regexEnv, env);
          templateQlist = templateQlist.replace(regexEnv, env);
          /** Remplisage des template */
          for (const key in this.Champs) {
            if (Object.hasOwnProperty.call(this.Champs, key)) {
              const id = this.Champs[key];
              let value = this.ChampsValue[id];
              let regexChamps = new RegExp("{{" + key + "}}", "gi");
              templateFolder = templateFolder.replace(regexChamps, value);
              templateQlist = templateQlist.replace(regexChamps, value);
            }
          }
          /** Création des folders */
          let tab = templateFolder.split("/");
          let full = "";
          let fullOld = "";
          for (let index = 0; index < tab.length; index++) {
            const etage = tab[index];
            full += etage;
            let exsits = await this.IfFolderExist(full);
            if (!exsits) {
              let id = await this.FolderGetId(fullOld);
              //console.log("fullOld = ",fullOld,"id = ",id)
              await this.MkdirFolder(etage, token, id);
            }
            fullOld = full;
            full += "/";
          }
          /** Création des Qlist */
          let idFull = await this.FolderGetId(templateFolder);
          await this.CreateQList(token,idFull,templateQlist)
        }
        this.statusProjet = "Création Terminé"
      } else {
         this.statusProjet = "Il manque des Assets"
      }
    },
    async checkOrchestrator() {
      this.token = "";
      this.txtGetFolders = "";
      this.txtGetFoldersError = "";
      this.txtGetTokenError = "";
      this.txtGetToken = "Récupération Token :";
      this.ApiOk = false;
      let raw = JSON.stringify({
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
      //console.log("requestOptions",requestOptions)

      const response = await fetch("/form1.php?rq=" + raw, requestOptions);
      const result = await response.text();
      try {
        this.token = JSON.parse(result).access_token;
        if (this.token == undefined) {
          throw "Fail Get Token";
        }
        this.txtGetToken += " Réussite";
        this.txtGetFolders = "Get List Folders : ";
        let raw2 = JSON.stringify({
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

        let requestOptions2 = {
          method: "get",
          headers: {},
          redirect: "follow",
        };
        const response2 = await fetch("/form1.php?rq=" + raw2, requestOptions2);
        const result2 = await response2.text();
        try {
          let data = JSON.parse(result2).value;
          this.txtGetFolders += "Folders(" + data.length + ")";
          let state = true;
          data.forEach((folder) => {
            if (folder.FullyQualifiedName == "CONFIG") {
              state = false;
              this.IdFolder = folder.Id;
            }
          });
          if (state) {
            this.txtGetFolders += "Fail => le Folder CONFIG don't Exist";
            this.ApiOk = false;
          } else {
            let Assets = await this.GetAssets(this.token, this.IdFolder);
            let nboccurence = 0;
            Assets.forEach((asset) => {
              if (asset.Name == "TemplateQlist") {
                this.TemplateQlist = asset.StringValue;
                nboccurence += 1;
              }
              if (asset.Name == "TemplateFolder") {
                this.TemplateFolder = asset.StringValue;
                nboccurence += 1;
              }
              if (asset.Name == "Envs_JSON") {
                try {
                  console.log("asset = ",asset)
                  //console.log("asset.StringValue = ",asset.StringValue)
                  this.Envs_JSON = JSON.parse(JSON.stringify(JSON.parse(asset.StringValue)));
                  //console.log("this.Envs_JSON= ",this.Envs_JSON)
                  //console.log("this.Envs_JSON[0]= ",this.Envs_JSON[0])
                  
                  
                  
                  nboccurence += 1;
                } catch (error) {
                  console.log(error);
                }
              }
            });
            if (nboccurence >= 3) {
              let index = 0;
              this.Champs = {};
              this.ChampsValue = [];
              let champsArrayFolder =
                this.TemplateFolder.match(/\{\{[^}]+\}\}/gi);
              champsArrayFolder.forEach((name) => {
                if (name != "{{Env}}") {
                  if (
                    this.Champs[name.replace(/\{/gi, "").replace(/\}/gi, "")] ==
                    undefined
                  ) {
                    this.Champs[name.replace(/\{/gi, "").replace(/\}/gi, "")] =
                      index;
                    index += 1;
                    this.ChampsValue.push("");
                  }
                }
              });
              let champsArrayQlist =
                this.TemplateQlist.match(/\{\{[^}]+\}\}/gi);
              champsArrayQlist.forEach((name) => {
                if (name != "{{Env}}") {
                  if (
                    this.Champs[name.replace(/\{/gi, "").replace(/\}/gi, "")] ==
                    undefined
                  ) {
                    this.Champs[name.replace(/\{/gi, "").replace(/\}/gi, "")] =
                      index;
                    index += 1;
                    this.ChampsValue.push("");
                  }
                }
              });
              this.txtGetFolders += "Reussit";
              this.ApiOk = true;
            } else {
              this.txtGetFolders += "Fail => Assets missing";
            }
          }
        } catch (error) {
          this.txtGetFoldersError = result2;
          this.txtGetFolders += "Fail";
        }
      } catch (error) {
        this.txtGetTokenError = result;
        this.txtGetToken += "Fail";
      }
    },
  },
  props: {
    message: Object,
    currentLocale: String,
  },
};
</script>