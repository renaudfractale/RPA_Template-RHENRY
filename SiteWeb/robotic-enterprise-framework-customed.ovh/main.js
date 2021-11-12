const app = Vue.createApp({
    data() {
      return {
       state : 0,
       orchestrator :{
        accountLogicalName : "",
        clientId : "",
        userId : "",
        tenantName : "",
        txt :""
       }
      }
    },
  
    methods: {
      checkOrchestrator(event) {
        this.orchestrator.txt ="Récupération Token\n"
        var myHeaders = new Headers();
        myHeaders.append("X-UIPATH-TenantName", this.orchestrator.tenantName );
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, DELETE');
        myHeaders.append('Access-Control-Allow-Origin', '*');
        var raw = JSON.stringify({
          "grant_type": "refresh_token",
          "client_id": this.orchestrator.clientId,
          "refresh_token": this.orchestrator.userId
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://account.uipath.com/oauth/token", requestOptions)
          .then(response => response.text())
          .then(result => {
            this.orchestrator.txt+=result
          })
          .catch(error => {
            this.orchestrator.txt+=error
          });
              }
            },
          })

  const vm = app.mount('#app')