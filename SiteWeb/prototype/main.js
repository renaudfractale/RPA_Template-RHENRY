
const app = Vue.createApp({
  data() {
    return {
      state: 4,
      orchestrator: {
        accountLogicalName: "",
        clientId: "",
        userKey: "",
        tenantName: "",
        txtGetToken: "",
        txtGetTokenError: "",
        txtGetFolders: "",
        txtGetFoldersError: "",
        token: "",
        ApiOk: false
      },
      SMTP: {
        login: "",
        pwd: "",
        port: 0,
        serveur: ""
      },
      NOSQL: {
        used: true,
        login: "",
        pwd: "",
        URL: "",
      },
      Logs: {
        used: true,
        path: "",
      },
      Env_tempName: "",
      Env_tempDescription: "",
      envs: [
        { name: "DEV", about: "Test Unitaire" },
        { name: "UAT", about: "Test Integration" },
        { name: "PROD", about: "Programme stable" },
      ],
      paternes : {
        emailInfoError : "{{Env}}-{{Projet}}-{{Programme}}-Erreur@ledomaine.com",
        emailInfoRecap : "{{Env}}-{{Projet}}-{{Programme}}-Recap@ledomaine.com",
        pathFolder : "{{Unitée}}/{{Projet}}/{{Programme}}/{{Env}}",
        nameQliste : "QListe-{{Projet}}-{{Programme}}-{{Env}}"
      },
      AncienStrct : {}

    }
    
  },

  methods: {
    async CreateOrchestrator(event){
      let rawGetTokent = JSON.stringify({
        "url": "https://account.uipath.com/oauth/token",
        "methode": "POST",
        "head": [
          "X-UIPATH-TenantName : " + this.orchestrator.tenantName,
          'Content-Type: application/json'
        ],
        "body": {
          "grant_type": "refresh_token",
          "client_id": this.orchestrator.clientId,
          "refresh_token": this.orchestrator.userKey
        }

      });

      let requestOptions = {
        method: 'get',
        headers: {},
        redirect: 'follow',
      };
      const responseToken = await fetch("/form1.php?rq=" + rawGetTokent, requestOptions)
      const resultToken = await responseToken.text()
      this.orchestrator.token = JSON.parse(resultToken).access_token

      let rawGetFolders = JSON.stringify({
        "url": "https://platform.uipath.com/" + this.orchestrator.accountLogicalName + "/" + this.orchestrator.tenantName + "/odata/folders",
        "methode": "GET",
        "head": [
          "X-UIPATH-TenantName: " + this.orchestrator.tenantName,
          'Authorization: Bearer ' + this.orchestrator.token,
          'Content-Type: application/json'
        ],
        "body": {}
      });

      const responseFolders = await fetch("/form1.php?rq=" + rawGetFolders, requestOptions)
      const resultFolders = await responseFolders.text()
      let folders = JSON.parse(resultFolders).value;
      for (let index = 0; index < folders.length; index++) {
        let folder = folders[index];
        let Id = folder.Id;


        /*             Assets                */
        let rawGetAssets = JSON.stringify({
          "url": "https://platform.uipath.com/" + this.orchestrator.accountLogicalName + "/" + this.orchestrator.tenantName + "/odata/Assets",
          "methode": "GET",
          "head": [
            "X-UIPATH-TenantName: " + this.orchestrator.tenantName,
            "X-UIPATH-OrganizationUnitId: " + Id,
            'Authorization: Bearer ' + this.orchestrator.token,
            'Content-Type: application/json'
          ],
          "body": {}
        });
        const responseAssets = await fetch("/form1.php?rq=" + rawGetAssets, requestOptions);
        const resultAssets= await responseAssets.text();
        let assets = JSON.parse(resultAssets).value;
        folders[index].Assets = assets;

        /*             Processes                */
        let rawGetProcesses = JSON.stringify({
          "url": "https://platform.uipath.com/" + this.orchestrator.accountLogicalName + "/" + this.orchestrator.tenantName + "/odata/Processes",
          "methode": "GET",
          "head": [
            "X-UIPATH-TenantName: " + this.orchestrator.tenantName,
            "X-UIPATH-OrganizationUnitId: " + Id,
            'Authorization: Bearer ' + this.orchestrator.token,
            'Content-Type: application/json'
          ],
          "body": {}
        });
        const responseProcesses = await fetch("/form1.php?rq=" + rawGetProcesses, requestOptions);
        const resultProcesses= await responseProcesses.text();
        let processes = JSON.parse(resultProcesses).value;
        folders[index].Processes = processes;

        /*             Robots                */
        let rawGetRobots = JSON.stringify({
          "url": "https://platform.uipath.com/" + this.orchestrator.accountLogicalName + "/" + this.orchestrator.tenantName + "/odata/Robots",
          "methode": "GET",
          "head": [
            "X-UIPATH-TenantName: " + this.orchestrator.tenantName,
            "X-UIPATH-OrganizationUnitId: " + Id,
            'Authorization: Bearer ' + this.orchestrator.token,
            'Content-Type: application/json'
          ],
          "body": {}
        });
        const responseRobots = await fetch("/form1.php?rq=" + rawGetRobots, requestOptions);
        const resultRobots= await responseRobots.text();
        let robots = JSON.parse(resultRobots).value;
        folders[index].Robots = robots;


      }
      this.AncienStrct = folders
      console.log(folders)
    },


    AddEnv(event) {
      if (this.Env_tempName.length != 0 && this.Env_tempDescription.length != 0) {
        let isexist = false
        this.envs.forEach(element => {
          if (element.name.toLowerCase() == this.Env_tempName.toLowerCase()) {
            isexist = true;
          }
        });
        if (isexist == false) {
          this.envs.push({
            name: this.Env_tempName.toUpperCase(),
            about: this.Env_tempDescription
          })
        }
      }
    },
    RemoveEnv(index) {
      this.envs.splice(index, 1);
    },
    ChipAdd(event) {
      alert(event)
    },
    ChipDelete(event) {
      alert(event)
    },
    NextState(event) {
      this.state += 1
    },
    PreviousState(event) {
      this.state -= 1
    },
    async checkOrchestrator(event) {
      this.orchestrator.token = ""
      this.orchestrator.txtGetFolders = ""
      this.orchestrator.txtGetFoldersError = ""
      this.orchestrator.txtGetTokenError = ""
      this.orchestrator.txtGetToken = "Récupération Token :"
      this.orchestrator.ApiOk = false
      let raw = JSON.stringify({
        "url": "https://account.uipath.com/oauth/token",
        "methode": "POST",
        "head": [
          "X-UIPATH-TenantName : " + this.orchestrator.tenantName,
          'Content-Type: application/json'
        ],
        "body": {
          "grant_type": "refresh_token",
          "client_id": this.orchestrator.clientId,
          "refresh_token": this.orchestrator.userKey
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
        this.orchestrator.token = JSON.parse(result).access_token
        if (this.orchestrator.token == undefined) {
          throw ("Fail Get Token")
        }
        this.orchestrator.txtGetToken += " Réussite"
        this.orchestrator.txtGetFolders = "Get List Folders : "
        let raw2 = JSON.stringify({
          "url": "https://platform.uipath.com/" + this.orchestrator.accountLogicalName + "/" + this.orchestrator.tenantName + "/odata/folders",
          "methode": "GET",
          "head": [
            "X-UIPATH-TenantName: " + this.orchestrator.tenantName,
            'Authorization: Bearer ' + this.orchestrator.token,
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
          this.orchestrator.txtGetFolders += "Folders(" + data.length + ")";
          this.orchestrator.ApiOk = true
        } catch (error) {
          this.orchestrator.txtGetFoldersError = result2
          this.orchestrator.txtGetFolders += "Fail"
        }


      } catch (error) {
        this.orchestrator.txtGetTokenError = result
        this.orchestrator.txtGetToken += "Fail"
      }
    }
  },
})




const vm = app.mount('#app')