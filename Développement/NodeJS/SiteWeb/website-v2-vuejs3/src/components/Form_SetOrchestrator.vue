<template>
  <div style="margin: 50px">
    <h1 class="header center orange-text">
      {{ message[currentLocale].form.installConfig.title }}
    </h1>
    <div class="row center">
      <h5 class="header col s12 light">
        {{ message[currentLocale].form.installConfig.explication }}
      </h5>
    </div>
    <div class="collection">
      <a @click="GotoStep(1)" class="collection-item center">{{
        message[currentLocale].form.installConfig.Step01
      }}</a>
      <div v-if="NoStepCurrent == 1">
        <div class="row">
          <div class="input-field col s6">
            <input v-model="accountLogicalName" type="text" />
            <label for="AccountLogicalName">{{
              message[currentLocale].form.installConfig.AccountLogicalName
            }}</label>
          </div>
          <div class="input-field col s6">
            <input v-model="clientId" type="text" />
            <label for="ClientId">{{
              message[currentLocale].form.installConfig.ClientId
            }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input v-model="userKey" type="text" />
            <label for="UserKey_RefreshToken">{{
              message[currentLocale].form.installConfig.UserKey
            }}</label>
          </div>
          <div class="input-field col s6">
            <input v-model="tenantName" type="text" />
            <label for="TenantName">{{
              message[currentLocale].form.installConfig.TenantName
            }}</label>
          </div>
        </div>
        <div class="section">
          <div class="row">
            <div class="input-field col s12">
              <h5>
                https://cloud.uipath.com/{{ accountLogicalName }}/{{
                  tenantName
                }}
              </h5>
              <p>token : {{ token }}</p>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <h5>{{ txtGetToken }}</h5>
              <p>{{ txtGetTokenError }}</p>
              <h5>{{ txtGetFolders }}</h5>
              <p>{{ txtGetFoldersError }}</p>
              <button
                class="btn-large waves-effect waves-light orange col s12"
                @click="checkOrchestrator"
              >
                Validation
              </button>
            </div>
          </div>
        </div>
      </div>
      <a @click="GotoStep(2)" class="collection-item center">{{
        message[currentLocale].form.installConfig.Step02
      }}</a>
      <div v-if="NoStepCurrent == 2">
        <div class="row">
          <div class="input-field col s6">
            <input v-model="Email_CredentialSMTP_Login" type="text" />
            <label for="AccountLogicalName">{{
              message[currentLocale].form.installConfig
                .Email_CredentialSMTP_Login
            }}</label>
          </div>
          <div class="input-field col s6">
            <input v-model="Email_CredentialSMTP_Pwd" type="text" />
            <label for="ClientId">{{
              message[currentLocale].form.installConfig.Email_CredentialSMTP_Pwd
            }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input v-model="Email_SMTP_Serveur" type="text" />
            <label for="UserKey_RefreshToken">{{
              message[currentLocale].form.installConfig.Email_SMTP_Serveur
            }}</label>
          </div>
          <div class="input-field col s6">
            <input v-model="Email_SMTP_Port" type="number" />
            <label for="TenantName">{{
              message[currentLocale].form.installConfig.Email_SMTP_Port
            }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <button
              class="btn-large waves-effect waves-light orange col s12"
              @click="PreviousPage()"
            >
              Previous
            </button>
          </div>
          <div class="input-field col s6">
            <button
              class="btn-large waves-effect waves-light orange col s12"
              @click="NextPage()"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <a @click="GotoStep(3)" class="collection-item center">{{
        message[currentLocale].form.installConfig.Step03
      }}</a>
      <div v-if="NoStepCurrent == 3">
        <div class="row">
          <div class="input-field col s6">
            <input v-model="DestinataireEmailError" type="text" />
            <label for="DestinataireEmailError">{{
              message[currentLocale].form.installConfig.DestinataireEmailError
            }}</label>
          </div>
          <div class="input-field col s6">
            <input v-model="CCEmailError" type="text" />
            <label for="CCEmailError">{{
              message[currentLocale].form.installConfig.CCEmailError
            }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input v-model="Email_EmailError" type="text" />
            <label for="Email_EmailError">{{
              message[currentLocale].form.installConfig.Email_EmailError
            }}</label>
          </div>
          <div class="input-field col s6">
            <input v-model="Email_NameError" type="text" />
            <label for="Email_NameError">{{
              message[currentLocale].form.installConfig.Email_NameError
            }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input v-model="DestinataireEmailRecap" type="text" />
            <label for="DestinataireEmailRecap">{{
              message[currentLocale].form.installConfig.DestinataireEmailRecap
            }}</label>
          </div>
          <div class="input-field col s6">
            <input v-model="CCEmailRecap" type="text" />
            <label for="CCEmailRecap">{{
              message[currentLocale].form.installConfig.CCEmailRecap
            }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input v-model="Email_EmailRecap" type="text" />
            <label for="Email_EmailRecap">{{
              message[currentLocale].form.installConfig.Email_EmailRecap
            }}</label>
          </div>
          <div class="input-field col s6">
            <input v-model="Email_NameRecap" type="text" />
            <label for="Email_NameRecap">{{
              message[currentLocale].form.installConfig.Email_NameRecap
            }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <button
              class="btn-large waves-effect waves-light orange col s12"
              @click="PreviousPage()"
            >
              Previous
            </button>
          </div>
          <div class="input-field col s6">
            <button
              class="btn-large waves-effect waves-light orange col s12"
              @click="NextPage()"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <a @click="GotoStep(4)" class="collection-item center">{{
        message[currentLocale].form.installConfig.Step04
      }}</a>
      <div v-if="NoStepCurrent == 4">
        <h5>
          {{ message[currentLocale].form.installConfig.LogDB_NOSQL_Actif }} :
          <a
            :href="
              message[currentLocale].form.installConfig.LogDB_NOSQL_Info_Url
            "
            target="_blank"
          >
            {{
              message[currentLocale].form.installConfig.LogDB_NOSQL_Info_Txt
            }}</a
          >
        </h5>

        <div class="row">
          <a
            class="btn-large waves-effect waves-light orange col s12"
            @click="LogDB_NOSQL_Actif = !LogDB_NOSQL_Actif"
            >{{ LogDB_NOSQL_Actif ? "Desactive" : "Afficher" }}</a
          >
        </div>

        <div v-if="LogDB_NOSQL_Actif">
          <div class="row">
            <div class="input-field col s6">
              <input v-model="LogDB_NOSQL_Credential_Login" type="text" />
              <label for="LogDB_NOSQL_Credential_Login">{{
                message[currentLocale].form.installConfig
                  .LogDB_NOSQL_Credential_Login
              }}</label>
            </div>
            <div class="input-field col s6">
              <input v-model="LogDB_NOSQL_Credential_Pwd" type="text" />
              <label for="LogDB_NOSQL_Credential_Pwd">{{
                message[currentLocale].form.installConfig
                  .LogDB_NOSQL_Credential_Pwd
              }}</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input v-model="LogDB_NOSQL_URL" type="text" />
              <label for="LogDB_NOSQL_URL">{{
                message[currentLocale].form.installConfig.LogDB_NOSQL_URL
              }}</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <button
                class="btn-large waves-effect waves-light orange col s12"
                @click="PreviousPage()"
              >
                Previous
              </button>
            </div>
            <div class="input-field col s6">
              <button
                class="btn-large waves-effect waves-light orange col s12"
                @click="NextPage()"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <a @click="GotoStep(5)" class="collection-item center">{{
        message[currentLocale].form.installConfig.Step05
      }}</a>
      <div v-if="NoStepCurrent == 5">
        <h5>{{ message[currentLocale].form.installConfig.LogFile_Actif }} :</h5>

        <div class="row">
          <a
            class="btn-large waves-effect waves-light orange col s12"
            @click="LogFile_Actif = !LogFile_Actif"
            >{{ LogFile_Actif ? "Desactive" : "Afficher" }}</a
          >
        </div>

        <div v-if="LogFile_Actif">
          <div class="row">
            <div class="input-field col s12">
              <input v-model="LogFile_Path" type="text" />
              <label for="LogFile_Path">{{
                message[currentLocale].form.installConfig.LogFile_Path
              }}</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <button
                class="btn-large waves-effect waves-light orange col s12"
                @click="PreviousPage()"
              >
                Previous
              </button>
            </div>
            <div class="input-field col s6">
              <button
                class="btn-large waves-effect waves-light orange col s12"
                @click="NextPage()"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <a @click="GotoStep(6)" class="collection-item center">{{
        message[currentLocale].form.installConfig.Step06
      }}</a>
      <div v-if="NoStepCurrent == 6">
        <div class="row">
          <a
            class="btn-large waves-effect waves-light orange col s12"
            @click="installation"
            >Run</a
          >
        </div>
      </div>
    </div>
  </div>
</template>



<script>
//const { DateTime } = require("luxon");
export default {
  name: "Form_SetOrchestrator",
  data() {
    return {
      token: "",
      accountLogicalName: "lesclichesderenaudcom001",
      clientId: "8DEv1AMNXczW3y4U15LL3jYf62jK93n5",
      userKey: "5v7uI6e8ME3BThR9QLJt2glbNo33QVpBbTasNiw12J6QJ",
      tenantName: "DefaultTenant",
      txtGetToken: "",
      txtGetTokenError: "",
      txtGetFolders: "",
      txtGetFoldersError: "",
      ApiOk: false,
      NoStepCurrent: 4,
      NoStepMax: 1,

      Email_CredentialSMTP_Login: "rpa001@lesclichesderenaud.com",
      Email_CredentialSMTP_Pwd: "Vbxsc7cGuRb9bW6",
      Email_SMTP_Serveur: "ssl0.ovh.net",
      Email_SMTP_Port: 465,

      CCEmailError: "renaud.henry@gmail.com",
      CCEmailRecap: "renaud.henry@gmail.com",
      DestinataireEmailError: "renaud.henry@gmail.com",
      DestinataireEmailRecap: "renaud.henry@gmail.com",
      Email_EmailError: "bot-error@lesclichesderenaud.com",
      Email_EmailRecap: "bot-recap@lesclichesderenaud.com",
      Email_NameError: "BOT ERROR",
      Email_NameRecap: "BOT RECAP",

      LogDB_NOSQL_Actif: true,
      LogDB_NOSQL_Credential_Login: "User",
      LogDB_NOSQL_Credential_Pwd: "74z7iUmQbx3HS4a",
      LogDB_NOSQL_URL: "loguipath.qx6bj.mongodb.net",

      LogFile_Actif: true,
      LogFile_Path: "C:\\Logs",
    };
  },
  methods: {
    async installation() {
       async function GetToken() {
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
        }

        async function MkdirFolder(name, token) {
          let body = {
            DisplayName: name,
            Description: "Folder Of Configuration",
            ProvisionType: "Automatic",
            PermissionModel: "FineGrained",
            ParentId: null,
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
          const response2 = await fetch(
            "/form2.php?rq=" + raw,
            requestOptions2
          );
          const result2 = await response2.text();
          try {
            let res = JSON.parse(result2);
             console.log(res)
            return true;
          } catch (error) {
            return false;
          }
        }

        async function CreateCredential(title,login, pwd, token) {
          let body = {
            Name: title,
            ValueScope: "Global",
            ValueType: "Credential",
            StringValue: "",
            CredentialUsername: login,
            CredentialPassword: pwd,
          };
          let raw = JSON.stringify({
            url:
              "https://platform.uipath.com/" +
              this.accountLogicalName +
              "/" +
              this.tenantName +
              "/odata/Assets",
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
          const response2 = await fetch(
            "/form2.php?rq=" + raw,
            requestOptions2
          );
          const result2 = await response2.text();
          try {
            let res = JSON.parse(result2);
            console.log(res)
            return true;
          } catch (error) {
            return false;
          }
        }

      this.NoStepCurrent = 1;
      this.checkOrchestrator();
      if (this.NoStepCurrent != 2) {
        return
      } else {
       

        let token = await GetToken();
        if (token == undefined) return;
        let stateFolder = await MkdirFolder("CONFIG", token);
        if (stateFolder == false) return;
        let stateAccountLogicalName = CreateCredential("Orchestrator_AccountLogicalName","AccountLogicalName", this.accountLogicalName,token);
        let stateClientId = CreateCredential("Orchestrator_client_id","client_id", this.clientId,token);
        let stateRefresh_token = CreateCredential("Orchestrator_refresh_token","refresh_token", this.refresh_token,token);
        let stateTenantName = CreateCredential("Orchestrator_TenantName","TenantName", this.tenantName,token);
        let stateNOSQL_Credential= CreateCredential("LogDB_NOSQL_Credential",this.LogDB_NOSQL_Credential_Login, this.LogDB_NOSQL_Credential_Pwd,token);
        let stateSMTP_Credential= CreateCredential("Email_CredentialSMTP",this.Email_CredentialSMTP_Login, this.Email_CredentialSMTP_Pwd,token);
        if(stateAccountLogicalName && stateClientId && stateRefresh_token && stateTenantName && stateNOSQL_Credential && stateSMTP_Credential )
        {
          return true
        }
        
      }
    },
    PreviousPage() {
      if (this.NoStepCurrent > 1) {
        this.NoStepCurrent -= 1;
      }
    },
    NextPage() {
      this.NoStepCurrent += 1;
      this.NoStepMax = Math.max(this.NoStepMax, this.NoStepCurrent);
    },
    GotoStep(No) {
      if (this.NoStepMax >= No) {
        this.NoStepCurrent = No;
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
        const response2 = await fetch("/form2.php?rq=" + raw2, requestOptions2);
        const result2 = await response2.text();
        try {
          let data = JSON.parse(result2).value;
          this.txtGetFolders += "Folders(" + data.length + ")";
          let state = true;
          data.forEach((folder) => {
            if (folder.FullyQualifiedName == "CONFIG") {
              state = false;
            }
          });
          if (state) {
            this.NoStepCurrent = 2;
            this.NoStepMax = Math.max(this.NoStepMax, this.NoStepCurrent);
          } else {
            this.txtGetFolders += "Fail => le Folder CONFIG Exist";
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