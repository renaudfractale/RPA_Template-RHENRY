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
            backup: {
              title: "Backup Orchestrator",
              explication:
                "This form allows you to export the Json of your orchestrator configuration.",
              AccountLogicalName : "Account Logical Name",
              UserKey : "User Key / Refresh Token",
              TenantName : "TenantName",
              ClientId :  "Client Id"
            },
            installConfig :{
              title : "Custom REF installer",
              explication :  "This form allows you to create the CONFIG folder with the indispensable Assets of the customised REF",
              AccountLogicalName : "Account Logical Name",
              UserKey : "User Key / Refresh Token",
              TenantName : "TenantName",
              ClientId :  "Client Id"
            }
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
            backup: {
              title: "Sauvegarde de votre Orchestrator",
              explication:
                "Ce formulaire permet d’exporter le Json de la configuration de votre orchestrator.",
              AccountLogicalName : "Nom logique du compte",
              UserKey : "Clé d’utilisateur/ Refresh Token",
              TenantName : "Nom de locataire",
              ClientId :  "ID du client"
            },
            installConfig :{
              title : "Installateur du REF personnalisé", //Custom REF installer
              explication :  "Ce formulaire permet de créer le dossier CONFIG avec les ressources indispensables du REF personnalisé", // This form allows you to create the CONFIG folder with the indispensable resources of the customised REF
              AccountLogicalName : "Nom logique du compte",
              UserKey : "Clé d’utilisateur/ Refresh Token",
              TenantName : "Nom de locataire",
              ClientId :  "ID du client"
            }
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
