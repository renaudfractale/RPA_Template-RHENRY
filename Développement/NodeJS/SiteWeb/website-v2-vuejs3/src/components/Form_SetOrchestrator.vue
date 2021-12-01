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
       <div class="row center" v-if="timestamp.length>0">
      <h5 class="header col s12 light">
      Last Installation : {{ timestamp }}
      </h5>
    </div>
    <div class="collection">
      <a @click="GotoStep(1)" class="collection-item center">{{
        message[currentLocale].form.installConfig.Step01
      }}</a>
      <div v-if="NoStepCurrent == 1">
        <div class="row">
          <div class="input-field col s6">
            <input
              :placeholder="accountLogicalName"
              v-model="accountLogicalName"
              type="text"
            />
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
            <input v-model="DestinataireEmailError" type="email" />
            <label for="DestinataireEmailError">{{
              message[currentLocale].form.installConfig.DestinataireEmailError
            }}</label>
          </div>
          <div class="input-field col s6">
            <input v-model="CCEmailError" type="email" />
            <label for="CCEmailError">{{
              message[currentLocale].form.installConfig.CCEmailError
            }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input v-model="Email_EmailError" type="email" />
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
            <input v-model="DestinataireEmailRecap" type="email" />
            <label for="DestinataireEmailRecap">{{
              message[currentLocale].form.installConfig.DestinataireEmailRecap
            }}</label>
          </div>
          <div class="input-field col s6">
            <input v-model="CCEmailRecap" type="email" />
            <label for="CCEmailRecap">{{
              message[currentLocale].form.installConfig.CCEmailRecap
            }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input v-model="Email_EmailRecap" type="email" />
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
          <div class="input-field col s12">
            <input v-model="Template_Folder" type="text" />
            <label for="Template_Folder">{{
              message[currentLocale].form.installConfig.Template_Folder
            }}</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input v-model="Template_QListe" type="text" />
            <label for="Template_QListe">{{
              message[currentLocale].form.installConfig.Template_QListe
            }}</label>
          </div>
        </div>
        <p v-for="(txt, id) in msgError" :key="'msgError'+id">{{ txt }}</p>
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
              @click="CheckTemplate()"
            >
              Next
            </button>
          </div>
        </div>
      </div>

       <a @click="GotoStep(7)" class="collection-item center">{{
        message[currentLocale].form.installConfig.Step07
      }}</a>
      <div v-if="NoStepCurrent == 7">
<h5 class="center"> List of Env in Uipath </h5>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="" v-model="Env_tempName" type="text">
              <label for="PortSMTP">{{ message[currentLocale].form.installConfig.NameEnv }} </label>
            </div>
            <div class="input-field col s6">
              <input placeholder="" v-model="Env_tempDescription" type="text">
              <label for="ServeurSMTP">{{ message[currentLocale].form.installConfig.NameDesc }}</label>
            </div>
          </div>
          <button class="btn-large waves-effect waves-light orange center" @click="AddEnv"
          v-if="Env_tempName.length != 0 && Env_tempDescription.length != 0"
          > Add Env</button>
          <ul class="collection">
            <li class="collection-item" v-for="(env, index) in envs" :key="'envs-'+index"> <button
                class="btn-large waves-effect waves-light orange center" @click="RemoveEnv(index)"> -</button> {{
              env.name }} : {{ env.about }} </li>
          </ul>
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
      <a @click="GotoStep(8)" class="collection-item center">{{
        message[currentLocale].form.installConfig.Step08
      }}</a>
      <div v-if="NoStepCurrent == 8">
        <div class="row" v-if="isNotInstall">
          <a
            class="btn-large waves-effect waves-light orange col s12"
            @click="installation"
            >Run installation</a
          >
        </div>
      </div>
    </div>
  </div>
!<!--  <p v-for="(txt, id) in errortxt" :key="id">{{ txt }}</p> -->
</template>



<script>
const { DateTime } = require("luxon");
export default {
  name: "Form_SetOrchestrator",
  data() {
    return {
      isNotInstall :  true,
      token: "",
      accountLogicalName:"MyCompagny",
      clientId:"8DEv1AMNXczW3y4U15LL3jYXXXXXXX",
      userKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      tenantName: "DefaultTenant",
      txtGetToken: "",
      txtGetTokenError: "",
      txtGetFolders: "",
      txtGetFoldersError: "",
      ApiOk: false,
      NoStepCurrent: 1,
      NoStepMax: 1,

      Email_CredentialSMTP_Login:  "rpa@ldomaine.com",
      Email_CredentialSMTP_Pwd:  "PasswordEmail",
      Email_SMTP_Serveur:  "ssl0.ovh.net",
      Email_SMTP_Port:  465,

      CCEmailError:  "renaud.henry@domaine.com",
      CCEmailRecap:  "renaud.henry@domaine.com",
      DestinataireEmailError:  "renaud.henry@domaine.com",
      DestinataireEmailRecap:  "renaud.henry@domaine.com",
      Email_EmailError:  "bot-error@ldomaine.com",
      Email_EmailRecap:  "bot-recap@ldomaine.com",
      Email_NameError:  "BOT ERROR",
      Email_NameRecap:  "BOT RECAP",

      LogDB_NOSQL_Actif: true,
      LogDB_NOSQL_Credential_Login:  "UserUipath",
      LogDB_NOSQL_Credential_Pwd:  "PasswordNoSQL",
      LogDB_NOSQL_URL:  "loguipath.xxxxx.mongodb.net",

      LogFile_Actif: true,
      LogFile_Path:  "C:\\Logs",

      Template_Folder : "{{Unite}}/{{Pays}}/{{Projet}}/{{Processus}}/{{Env}}",
      Template_QListe : "QList-{{Projet}}-{{Processus}}-{{Env}}",
      
      msgError : [],
      errortxt: [],
      timestamp: "",
      Env_tempName : "",
      Env_tempDescription:"",
      envs: [
        { name: "DEV", about: "Test Unitaire" },
        { name: "UAT", about: "Test Integration" },
        { name: "PROD", about: "Programme stable" },
      ],
          };
  },
  methods: {
    AddEnv() {
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
    CheckTemplate(){
      let elements = [ "{{Unite}}","{{Pays}}","{{Projet}}","{{Processus}}","{{Env}}","{{RégionDuMonde}}"]
       let folder = this.Template_Folder
      elements.forEach(element => {
        folder=folder.replace(element,"")
      });
       let qlist = this.Template_QListe
      elements.forEach(element => {
        qlist=qlist.replace(element,"")
      });
      let msgError = []
      if(folder.match(/\}/gi) || folder.match(/\{/gi))
      {
        msgError.push(" Folder => Erreur durant la simplification : '"+folder+"'")
      }
      if(qlist.match(/\}/gi) || qlist.match(/\{/gi))
      {
        msgError.push(" Qlist => Erreur durant la simplification : '"+qlist+"'")
      }
      if(msgError.length==0){
        this.NextPage()
        this.msgError= []
      } else {
        this.msgError=msgError
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
        this.AddTxt(result);
        return JSON.parse(result).access_token;
      } catch {
        return undefined;
      }
    },

    async MkdirFolder(name, token) {
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
      const response2 = await fetch("/form2.php?rq=" + raw, requestOptions2);
      const result2 = await response2.text();
      this.AddTxt(result2);
      try {
        let res = JSON.parse(result2);
        console.log(res);
        return res.Id;
      } catch (error) {
        return undefined;
      }
    },
    async CreateCredential(title, login, pwd, token, idFolder) {
      this.AddTxt("login:=" + login);
      this.AddTxt("pwd:=" + pwd);

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
          "X-UIPATH-OrganizationUnitId: " + idFolder,
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
      const response2 = await fetch("/form2.php?rq=" + raw, requestOptions2);
      const result2 = await response2.text();
      this.AddTxt(result2);
      try {
        let res = JSON.parse(result2);
        console.log(res);
        return true;
      } catch (error) {
        return false;
      }
    },
    async CreateAssetTexte(title, txt, token, idFolder) {
      this.AddTxt("title:=" + title);
      this.AddTxt("txt:=" + txt);

      let body = {
        Name: title,
        ValueScope: "Global",
        ValueType: "Text",
        StringValue: txt,
        Value: txt,
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
          "X-UIPATH-OrganizationUnitId: " + idFolder,
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
      const response2 = await fetch("/form2.php?rq=" + raw, requestOptions2);
      const result2 = await response2.text();
      this.AddTxt(result2);
      try {
        let res = JSON.parse(result2);
        console.log(res);
        return true;
      } catch (error) {
        return false;
      }
    },
    async CreateAssetInteger(title, nb, token, idFolder) {
      this.AddTxt("title:=" + title);
      this.AddTxt("nb:=" + nb);

      let body = {
        Name: title,
        ValueScope: "Global",
        ValueType: "Integer",
        IntValue: nb,
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
          "X-UIPATH-OrganizationUnitId: " + idFolder,
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
      const response2 = await fetch("/form2.php?rq=" + raw, requestOptions2);
      const result2 = await response2.text();
      this.AddTxt(result2);
      try {
        let res = JSON.parse(result2);
        console.log(res);
        return true;
      } catch (error) {
        return false;
      }
    },
    async CreateAssetBool(title, bool, token, idFolder) {
      this.AddTxt("title:=" + title);
      this.AddTxt("bool:=" + bool);

      let body = {
        Name: title,
        ValueScope: "Global",
        ValueType: "Bool",
        BoolValue: bool,
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
          "X-UIPATH-OrganizationUnitId: " + idFolder,
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
      const response2 = await fetch("/form2.php?rq=" + raw, requestOptions2);
      const result2 = await response2.text();
      this.AddTxt(result2);
      try {
        let res = JSON.parse(result2);
        console.log(res);
        return true;
      } catch (error) {
        return false;
      }
    },
    AddTxt(txt) {
      this.errortxt.push(txt);
    },
    async installation() {
      this.timestamp=""
      this.isNotInstall=false
      this.NoStepCurrent = 1;
      await this.checkOrchestrator();
      this.AddTxt("this.NoStepCurrent:=" + this.NoStepCurrent);
      if (this.NoStepCurrent != 2) {
        this.isNotInstall=true
        return;
      } else {
        this.AddTxt("token??");
        let token = await this.GetToken();
        this.AddTxt("token:=" + token);
        if (token == undefined) {
          this.isNotInstall=true
          return
        }
        let idFolder = await this.MkdirFolder("CONFIG", token);
        this.AddTxt("idFolder:=" + idFolder);
        if (idFolder == undefined){
          this.isNotInstall=true
          return
        } 
        let stateAccountLogicalName = await this.CreateCredential(
          "Orchestrator_AccountLogicalName",
          "AccountLogicalName",
          this.accountLogicalName,
          token,
          idFolder
        );
        let stateClientId = await this.CreateCredential(
          "Orchestrator_client_id",
          "client_id",
          this.clientId,
          token,
          idFolder
        );
        let stateRefresh_token = await this.CreateCredential(
          "Orchestrator_refresh_token",
          "refresh_token",
          this.userKey,
          token,
          idFolder
        );
        let stateTenantName = await this.CreateCredential(
          "Orchestrator_TenantName",
          "TenantName",
          this.tenantName,
          token,
          idFolder
        );
        let stateNOSQL_Credential = await this.CreateCredential(
          "LogDB_NOSQL_Credential",
          this.LogDB_NOSQL_Credential_Login,
          this.LogDB_NOSQL_Credential_Pwd,
          token,
          idFolder
        );
        let stateSMTP_Credential = await this.CreateCredential(
          "Email_CredentialSMTP",
          this.Email_CredentialSMTP_Login,
          this.Email_CredentialSMTP_Pwd,
          token,
          idFolder
        );
        if (
          !(
            stateAccountLogicalName &&
            stateClientId &&
            stateRefresh_token &&
            stateTenantName &&
            stateNOSQL_Credential &&
            stateSMTP_Credential
          )
        ) {
          this.isNotInstall=true
          return true;
        }
        let stateEnvs = await this.CreateAssetTexte(
          "Envs_JSON",
          JSON.stringify(this.envs),
          token,
          idFolder
        );
        let stateCCEmailError = await this.CreateAssetTexte(
          "CCEmailError",
          this.CCEmailError,
          token,
          idFolder
        );
        let stateCCEmailRecap = await this.CreateAssetTexte(
          "CCEmailRecap",
          this.CCEmailRecap,
          token,
          idFolder
        );
        let stateDestinataireEmailError = await this.CreateAssetTexte(
          "DestinataireEmailError",
          this.DestinataireEmailError,
          token,
          idFolder
        );
        let stateDestinataireEmailRecap = await this.CreateAssetTexte(
          "DestinataireEmailRecap",
          this.DestinataireEmailRecap,
          token,
          idFolder
        );
        let stateEmail_EmailError = await this.CreateAssetTexte(
          "Email_EmailError",
          this.Email_EmailError,
          token,
          idFolder
        );
        let stateEmail_EmailRecap = await this.CreateAssetTexte(
          "Email_EmailRecap",
          this.Email_EmailRecap,
          token,
          idFolder
        );
        let stateEmail_NameError = await this.CreateAssetTexte(
          "Email_NameError",
          this.Email_NameError,
          token,
          idFolder
        );
        let stateEmail_NameRecap = await this.CreateAssetTexte(
          "Email_NameRecap",
          this.Email_NameRecap,
          token,
          idFolder
        );
        let stateEmail_ServeurSMTP = await this.CreateAssetTexte(
          "Email_ServeurSMTP",
          this.Email_SMTP_Serveur,
          token,
          idFolder
        );
        let stateEnvironnement = await this.CreateAssetTexte(
          "Environnement",
          "DEV",
          token,
          idFolder
        );
        let stateLogDB_NOSQL_URL = await this.CreateAssetTexte(
          "LogDB_NOSQL_URL",
          this.LogDB_NOSQL_URL,
          token,
          idFolder
        );
        let stateLogTxt_PathFolderBase = await this.CreateAssetTexte(
          "LogTxt_PathFolderBase",
          this.LogFile_Path,
          token,
          idFolder
        );
        let stateTemplateFolder = await this.CreateAssetTexte(
          "TemplateFolder",
          this.Template_Folder,
          token,
          idFolder
        );
        let stateLogTxt_TemplateQlist = await this.CreateAssetTexte(
          "TemplateQlist",
          this.Template_QListe,
          token,
          idFolder
        );
        
        if (
          !(
            stateLogTxt_TemplateQlist&& 
            stateTemplateFolder && 
            stateLogTxt_PathFolderBase &&
            stateLogDB_NOSQL_URL &&
            stateEnvironnement &&
            stateEmail_ServeurSMTP &&
            stateEmail_NameRecap &&
            stateEmail_NameError &&
            stateEmail_EmailRecap &&
            stateEmail_EmailError &&
            stateDestinataireEmailRecap &&
            stateDestinataireEmailError &&
            stateCCEmailError &&
            stateCCEmailRecap && 
            stateEnvs
          )
        ) {
          this.isNotInstall=true
          return true;
        }
        let stateLogEmail_Port = await this.CreateAssetInteger(
          "Email_Port",
          this.Email_SMTP_Port,
          token,
          idFolder
        );
        let stateLogLogTxt_Actif = await this.CreateAssetBool(
          "LogTxt_Actif",
          this.LogFile_Actif,
          token,
          idFolder
        );
        let stateLogDB_NOSQL_Actif = await this.CreateAssetBool(
          "LogDB_NOSQL_Actif",
          this.LogDB_NOSQL_Actif,
          token,
          idFolder
        );
        if (
          !(stateLogEmail_Port &&
          stateLogLogTxt_Actif &&
          stateLogDB_NOSQL_Actif)
        ){
          this.isNotInstall=true
          return true;
        }
          

          let now = DateTime.now()
          this.timestamp = now.toISODate()+" at "+now.toISOTime()
          this.isNotInstall=true
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
          this.AddTxt("state:=" + state);
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