
const app = Vue.createApp({
    data() {
      return {
       state : 0,
       orchestrator :{
        accountLogicalName :"",
        clientId :"",
        userKey : "",
        tenantName : "",
        txtGetToken :"",
        txtGetTokenError :"",
        txtGetFolders : "",
        txtGetFoldersError :"",
        token : "",
        ApiOk : false
       }
      }
    },
  
    methods: {
      NextState(event) {
        this.state+=1
      },

      async checkOrchestrator(event) {
        this.orchestrator.token= ""
        this.orchestrator.txtGetFolders= ""
        this.orchestrator.txtGetFoldersError= ""
        this.orchestrator.txtGetTokenError= ""
        this.orchestrator.txtGetToken ="Récupération Token :"
        this.orchestrator.ApiOk=false
        let raw = JSON.stringify({
          "url" : "https://account.uipath.com/oauth/token",
          "methode" : "POST",
          "head" :[
            "X-UIPATH-TenantName : "+this.orchestrator.tenantName,
            'Content-Type: application/json'
          ],
        "body" : {
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

        const response = await fetch("/form1.php?rq="+raw, requestOptions)
        const result = await  response.text()
            try {
              this.orchestrator.token = JSON.parse(result).access_token
              if(this.orchestrator.token == undefined){
                throw("Fail Get Token")
              }
              this.orchestrator.txtGetToken+= " Réussite"
              this.orchestrator.txtGetFolders = "Get List Folders : "
              let raw2 = JSON.stringify({
                "url" : "https://platform.uipath.com/"+this.orchestrator.accountLogicalName+"/"+this.orchestrator.tenantName+"/odata/folders",
                "methode" : "GET",
                "head" :[
                  "X-UIPATH-TenantName: "+this.orchestrator.tenantName,
                  'Authorization: Bearer '+this.orchestrator.token,
                  'Content-Type: application/json'
                ],
                "body" : {}
              });
      
              let requestOptions2 = {
                method: 'get',
                headers: {},
                redirect: 'follow',
              };
              const response2 = await fetch("/form2.php?rq="+raw2, requestOptions2)
              const result2 = await response2.text()
              try {
                
                let data = JSON.parse(result2).value;
                this.orchestrator.txtGetFolders += "Folders("+data.length+")";
                this.orchestrator.ApiOk  = true
              } catch (error) {
                this.orchestrator.txtGetFoldersError= result2
                this.orchestrator.txtGetFolders+= "Fail"
              }


            } catch (error) {
              this.orchestrator.txtGetTokenError= result
              this.orchestrator.txtGetToken+= "Fail"
            }
              }
            },
          })

          
          

  const vm = app.mount('#app')