<template>
  <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container">
      <img src="./assets/logo.png" style="padding: 5px" class="brand-logo" />
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link :to="{ name: 'Home' }">{{
            message[currentLocale].menus.home
          }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Infos' }">{{
            message[currentLocale].menus.infos
          }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Form' }">{{
            message[currentLocale].menus.form
          }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Graph' }">{{
            message[currentLocale].menus.graph
          }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AboutDev' }">{{
            message[currentLocale].menus.aboutdev
          }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AboutSite' }">{{
            message[currentLocale].menus.aboutsite
          }}</router-link>
        </li>
        <li v-if="currentLocale == 'en'">
          <a class="waves-effect waves-light btn" @click="switchlang('fr')"
            >Français</a
          >
        </li>
        <li v-if="currentLocale == 'fr'">
          <a class="waves-effect waves-light btn" @click="switchlang('en')"
            >English</a
          >
        </li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li>
          <router-link :to="{ name: 'Home' }">{{
            message[currentLocale].menus.home
          }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Infos' }">{{
            message[currentLocale].menus.infos
          }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Form' }">{{
            message[currentLocale].menus.form
          }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Graph' }">{{
            message[currentLocale].menus.graph
          }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AboutDev' }">{{
            message[currentLocale].menus.aboutdev
          }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AboutSite' }">{{
            message[currentLocale].menus.aboutsite
          }}</router-link>
        </li>
        <li v-if="currentLocale == 'en'">
          <a class="waves-effect waves-light btn" @click="switchlang('fr')"
            >Français</a
          >
        </li>
        <li v-if="currentLocale == 'fr'">
          <a class="waves-effect waves-light btn" @click="switchlang('en')"
            >English</a
          >
        </li>
      </ul>
      <a data-target="nav-mobile" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >
    </div>
  </nav>
  <router-view :message="message" :currentLocale="currentLocale"></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentLocale: "en",
      message: {
        en: {
          menus: {
            home: "Home",
            infos: "Infos",
            form: "Form",
            aboutdev: "About Dev",
            aboutsite: "About Site",
            graph: "Graph",
          },
          home: {
            title1: "Starter Template of",
            title2: "Robotic Enterprise Framework Customed",
            subtitle:
              "A modern framework based on Robotic Enterprise Framework Uipath",
            getstart: "Get Started",
            speedtitle: "Speeds up development",
            speedtxt:
              "We have done most of the work for you to provide a default framework that integrates our custom components (automated mailings, summary of robot actions, integrated dispatcher ...)",
            usertitle: "User Experience Focused",
            usertxt:
              "By using elements and principles that reduce maintenance, we were able to create a framework that integrates components and reports that provide more feedback to the robot users.",
            easytitle: "Easy to work with",
            easytxt:
              "We have provided detailed documentation and specific code examples to help new RPA developers get started. We are also always open to feedback and can answer any questions a user may have about REFC.",
          },
          aboutdev: {
            txt: "RPA Uipath developer by profession, I am passionate about process automation. I created this website to share my passion and my work. In particular the Robotic Enterprise Framework Customed.",
          },
          form: {
            tuto: "Tutorial of ",
            backup: {
              title: "Backup Orchestrator",
              explication:
                "This form allows you to export the Json of your orchestrator configuration.",
              AccountLogicalName: "Account Logical Name",
              UserKey: "User Key / Refresh Token",
              TenantName: "TenantName",
              ClientId: "Client Id",
            },
            projet: {
              title: "Creation of project files",
              explication:
                "This form allows the creation of the Project tree in the orchestrator.",
              AccountLogicalName: "Account Logical Name",
              UserKey: "User Key / Refresh Token",
              TenantName: "TenantName",
              ClientId: "Client Id",
            },
            installConfig: {
              title: "Custom REF installer",
              explication:
                "This form allows you to create the CONFIG folder with the indispensable Assets of the customised REF",

              Step01: "Connection to orchestrator",

              AccountLogicalName: "Account Logical Name",
              UserKey: "User Key / Refresh Token",
              TenantName: "TenantName",
              ClientId: "Client Id",

              Step02: "Connection to Email (SMTP)",

              Email_CredentialSMTP_Login: "login",
              Email_CredentialSMTP_Pwd: "Password",
              Email_SMTP_Serveur: "URL of server SMTP",
              Email_SMTP_Port: "Port of server SMTP",

              Step03: "Email config Base",

              CCEmailError: "Copy email(s) of the error message",
              CCEmailRecap: "Copy email(s) of the summary message",
              DestinataireEmailError:
                "Email(s) of the recipient of the error message",
              DestinataireEmailRecap:
                "Email(s) of the recipient of the summary message",
              Email_EmailError: "Email(s) of the sender of the error message",
              Email_EmailRecap: "Email(s) of the sender of the summary message",
              Email_NameError: "Name of the sender of the error message",
              Email_NameRecap: "Name of the sender of the summary message",

              Step04: "NoSql config",

              LogDB_NOSQL_Actif: "Use of NoSQL logs",
              LogDB_NOSQL_Info_Txt:
                "Free hosting is offered by Atlas (mongodb)",
              LogDB_NOSQL_Info_Url: "https://www.mongodb.com/pricing",
              LogDB_NOSQL_Credential_Login: "User's name",
              LogDB_NOSQL_Credential_Pwd: "User's password",
              LogDB_NOSQL_URL: "Url of the database",

              Step05: "Log Files config",

              LogFile_Actif: "Use of logs Text external to UIPATH",
              LogFile_Path: "Network or local log path",

              Step06: "Template",

              Template_Folder: "Folder path model",
              Template_QListe: "QItems model",

              Step07: "Definition of environments",

              NameEnv: "Names of the environment ",
              NameDesc: "Description of the environment",

              Step08: "Installation",
            },
          },
        },
        fr: {
          menus: {
            home: "Accueil",
            infos: "Infos",
            form: "Formulaire",
            aboutdev: "A propos du Dev",
            aboutsite: "A propos du Site",
            graph: "Graph de dépendance",
          },
          home: {
            title1: "Modèle de démarrage du",
            title2: "Robotic Enterprise Framework Customed",
            subtitle:
              "Un framework moderne basé sur le Robotic Enterprise Framework Uipath",
            getstart: "Allez à la documenation",
            speedtitle: "Accélère le développement",
            speedtxt:
              "Nous avons fait le plus gros du travail pour vous afin de fournir un cadre par défaut qui intègre tes composants personnalisés (mailings automatisés, résumé des actions du robot, dispatcher intégré...).",
            usertitle: "Axé sur l'expérience de l'utilisateur",
            usertxt:
              "En utilisant des éléments et des principes qui réduisent la maintenance, nous avons pu créer un framework qui intègre des composants et des rapports qui fournissent davantage de retour d'information aux utilisateurs du robot.",
            easytitle: "Facilité de travail",
            easytxt:
              "Nous avons fourni une documentation détaillée et des exemples de code spécifiques pour aider les nouveaux développeurs RPA à se lancer. Nous sommes également toujours ouverts aux commentaires et pouvons répondre à toutes les questions qu'un utilisateur peut avoir sur REFC.",
          },
          aboutdev: {
            txt: "Développeur RPA Uipath de profession, je suis passionné par l'automatisation des processus. J'ai créé ce site pour partager ma passion et mon travail. En particulier le Robotic Enterprise Framework Customed.",
          },
          form: {
            tuto: "Tutoriel du",
            backup: {
              title: "Sauvegarde de votre Orchestrator",
              explication:
                "Ce formulaire permet d’exporter le Json de la configuration de votre orchestrator.",
              AccountLogicalName: "Nom logique du compte",
              UserKey: "Clé d’utilisateur/ Refresh Token",
              TenantName: "Nom de locataire",
              ClientId: "ID du client",
            },
            projet: {
              title: "Création des dossiers Projet",
              explication:
                "Ce formulaire permet la création de l'arborescence Projet dans l'orchestrator.",
              AccountLogicalName: "Nom logique du compte",
              UserKey: "Clé d’utilisateur/ Refresh Token",
              TenantName: "Nom de locataire",
              ClientId: "ID du client",
            },
            installConfig: {
              title: "Installateur du REF personnalisé", //Custom REF installer
              explication:
                "Ce formulaire permet de créer le dossier CONFIG avec les ressources indispensables du REF personnalisé", // This form allows you to create the CONFIG folder with the indispensable resources of the customised REF

              Step01: "Connexion à orchestrateur",

              AccountLogicalName: "Nom logique du compte",
              UserKey: "Clé d’utilisateur/ Refresh Token",
              TenantName: "Nom de locataire",
              ClientId: "ID du client",

              Step02: "Connexion au serveur Email (SMTP)",

              Email_CredentialSMTP_Login: "Nom d'utilisateur",
              Email_CredentialSMTP_Pwd: "mots de passe d'utilisateur",
              Email_SMTP_Serveur: "URL du serveur",
              Email_SMTP_Port: "Port du serveur",

              Step03: "Email config Base",

              CCEmailError: "Email(s) en copie du message d'erreur",
              CCEmailRecap: "Email(s) en copie du message du récapitulatif",
              DestinataireEmailError:
                "Email(s) du destinataire du message d'erreur",
              DestinataireEmailRecap:
                "Email(s) du destinataire du message du récapitulatif",
              Email_EmailError: "Email(s) de l'émetteur  du message d'erreur",
              Email_EmailRecap:
                "Email(s) de l'émetteur  du message du récapitulatif",
              Email_NameError: "Nom de l'émetteur  du message d'erreur",
              Email_NameRecap: "Nom de l'émetteur  du message du récapitulatif",

              Step04: "Configuration du NoSql",

              LogDB_NOSQL_Actif: "Utilisation des logs NoSQL",
              LogDB_NOSQL_Info_Txt:
                "Un hebergement gratuit est proposé par Atlas de mongodb",
              LogDB_NOSQL_Info_Url: "https://www.mongodb.com/pricing",
              LogDB_NOSQL_Credential_Login: "Nom de l'utilisateur",
              LogDB_NOSQL_Credential_Pwd: "Mot de passe de l'utilisateur",
              LogDB_NOSQL_URL: "Url de la base de données",

              Step05: "Log Files config",

              LogFile_Actif: "Utilisation des logs Texte externe à UIPATH",
              LogFile_Path: "Chemin Réseaux ou local du log",

              Step06: "Template",

              Template_Folder: "modèle du chemin des dossiers",
              Template_QListe: "modèle du noms de la QListe",

              Step07: "Définition des environnements ",

              NameEnv: "Noms de l'environnement",
              NameDesc: "Description de l'environnement ",

              Step08: "Installation",
            },
          },
        },
      },
    };
  },
  methods: {
    switchlang(lang) {
      this.currentLocale = lang;
    },
  },
};
</script>

<style>
</style>
