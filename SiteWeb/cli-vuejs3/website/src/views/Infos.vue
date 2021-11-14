<template>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br /><br />
      <h5 class="header orange-text">
        1) Présentation du ROBOT ENTREPRISE FRAMEWORK VANILLA (REFV) UIPATH
      </h5>
      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m6">
              <img src="../assets/info/REFV.png" height="400" />
            </div>

            <div class="col s12 m6">
              <p>
                Le ROBOT ENTREPRISE FRAMEWORK VANILLA (REF ou REFV) proposé par
                UIPATH est un outil de base pour implémenter des processus.
                <br />
                Les tâches des processus robotisés sont atomiser en
                TransactionItem dans une file d’attente. Cela permet d’avoir une
                granulosité fine dans l’analyse du comportement des robots.
                <br />
                Le REF se décompose de 4 états : Etat 1 : Initialization <br />
                Cette état permet de charger la configuration et d’initialiser
                les applications<br />
                <br />
                Etat 2 : Get Transaction Data<br />
                Cette état permet récupérer une TransactionItem de la file
                d’attente<br />
                <br />
                Etat 3 : Process Transaction<br />
                Cette état permet réaliser la travail issus de la
                TransactionItem récupérée à l’état 2<br />
                <br />
                Etat 4 : End Process<br />
                Cette état permet clore le programme<br />
                <br />
                Dans ce contexte la file d’attente est alimenté par un second
                programme UIPATH nommé Dispatcher.<br />
              </p>
            </div>
          </div>
        </div>
        <br /><br />
      </div>
      <h5 class="header orange-text">
        2) Présentation du ROBOT ENTREPRISE FRAMEWORK CUSTOM (REFC)
      </h5>
      <h6 class="header orange-text">2.1) Les Lacunes du REFV</h6>
      <ul>
        <li>
          1) Il faut maintenir deux programmes UIPATH, le REFV et le Dispatcher
          séparément
        </li>
        <li>
          2) Si on veut exécuter une procédure au lancement et à la fin du
          robot, cela n’est pas possible
        </li>
        <li>
          3) Si on souhaites la gestion de la notion de groupe de
          TransactionItem, cela est complexe à obtenir
        </li>
        <li>
          4) La gestion des erreurs via un email avec capture d’écran n’est pas
          proposé par le REF
        </li>
        <li>
          5) Si on dispose d’une base de données, on serait tenté d’enregistrer
          les log dedans
        </li>
        <li>
          6) Le dictionnaire qui contient sur un seul niveau tous les paramètres
        </li>
      </ul>
      <h6 class="header orange-text">
        2.2) Représentation et détailles premier niveau du REFC
      </h6>
      <p>C’est pour cela que je vous proposes le REFC en 6 états :</p>
      <img src="../assets/info/REFC.png" height="500" class="center" />
      <p>
        Etat 1 : Initialisation de la configuration <br />
        • Cette état permet de charger la configuration et d’exécuter une
        procédure à lancement du robot<br />
        <br />
        Etat 2 : Dispatcher<br />
        • Cette état permet le générer les TransactionItem de la file d’attente,
        avec une fonction Mise à zéro de la file d’attente.<br />
        <br />
        Etat 3 : Initialisation des applications<br />
        • Cette étape permet Initialiser les applications du robots<br />
        <br />
        Etat 4 : Get Transaction Data<br />
        • Cette état permet récupérer une TransactionItem de la file
        d’attente<br />
        <br />
        Etat 5 : Process Transaction<br />
        • Cette état permet réaliser la travail issus de la TransactionItem
        récupérée à l’état 4<br />
        <br />
        Etat 6 : End Process<br />
        • Cette état permet clore le programme ,d’exécuter l’envoi de l’email
        récapitulatif et de lancer une procédures à la fin du robot<br />
      </p>
      <h6 class="header orange-text">
        2.3) Structure des dossiers Modernes dans l’Orchestrateur
      </h6>
      <img src="../assets/info/Image1.png" height="500" class="center" />

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m6">
              <h6 class="center">
                Le chargement de la configuration se fait en cinq phases :
              </h6>
              <img src="../assets/info/fusee.png" height="350" class="center" />
            </div>
            <div class="col s12 m6">
              <br /><br />
              <p>1) Phase 1 : Chargement des données primitives</p>
              <br />
              <p>2) Phase 2 : Construction des paternes</p>
              <br />
              <p>
                3) Phase 3 : Chargement de la configuration des systèmes annexes
              </p>
              <br />
              <p>
                4) Phase 4 : Chargement de la configuration lié aux constantes
                et l’environnement
              </p>
              <p>5) Phase 5 : Chargement des ressources (Assets)</p>
            </div>
          </div>
        </div>
      </div>

      <h7 class="header orange-text"
        >2.3.1) Phase 1 : Chargement des données primitive</h7
      >
      <p>
        Ici on charge les paramètres projet core, c’est-à-dire : <br />
        - Le code Projet => exemple : « RPA0001 » <br />
        - Le nom du programme => exemple : « Demo REFC » <br />
        - L’unité, c’est le nom du pôle qui utilise le robot => exemple «
        FINANCE » ou « RH » pour Ressources Humaine <br />
        - L’environnement du robot, soit DEV, UAT, PROD ou autre. Cette variable
        est mise à jour via une ressource avec une valeur personnalisé, mais
        c’est l’argument Env du programme MAIN qui à le dernier mot. Donc on
        peut forcer l’environnement d’un robot via l’api de lancement.
        Intéressant si on veut comparer le fonctionnement de deux environnements
        sur une même machine sans toucher le paramètre générale qui est la
        ressource avec une valeur personnalisé <br />
        - Le pays où fonctionne le robot , exemple « France » <br />
        - La région du monde du robot, exemple « Europe » <br />
        <i
          >Il faut noter que le pays et la région du monde n’est pas utilisé par
          la suite, mais si le paterne de la structure des dossiers se
          complexifie, le fait que les données pays et région du monde soit déjà
          renseigné simplifiera la migration d’une structure simple à
          complète</i
        >
      </p>
      <h7 class="header orange-text"
        >2.3.2) Phase 2 : Construction des paternes
      </h7>
      <p>
        En utilisant les ressources du dossier CONFIG, le robot construit le
        chemin d’accès à la file d’attende, le nom de la file d’attende et les
        mails d’envoie des informations d’erreurs et de récapitulatif en
        fonction des informations initialisées par l’étape 1
      </p>
      <h7 class="header orange-text"
        >2.3.3) Phase 3 : Chargement de la configuration des systèmes annexes
      </h7>
      <p>
        En utilisant les ressources du dossier CONFIG, le robot charge les
        paramètres de connexion à la base NOSQL, du dossier des logs Externe et
        autres systèmes d’informations
      </p>
      <h7 class="header orange-text"
        >2.3.4) Phase 4 : Chargement de la configuration lié aux constantes et à
        l’environnement
      </h7>
      <p>
        En utilisant les ressources du fichier de configuration , on charge en
        premier temps les constantes et en dernier les paramètre de
        l’environnement. Donc les paramètres d’environnement peut écraser les
        valeur des constantes.
      </p>
      <h7 class="header orange-text"
        >2.3.5) Phase 5 : Chargement des ressources (Assets)
      </h7>
      <p>
        En utilisant les ressources listées dans le fichier de configuration
        excel, on charge avec un chemin d’accès soit paramétré, soit en dur,
        soit dynamique. <br />
        - Quand le chemin est paramétré, les noms entre crochet sont remplacés
        par les valeurs des données Core (voir étape 1)<br />
        - Quand le chemin est en dure, on prend l’expression littéral<br />
        - Quand le chemin est en dynamique, le robot décompose le path du robot
        et à chaque dossier de l’Orchestrator, le système essaye de récupérer la
        ressource. Donc c’est le dernier dossier, le dossier de la file
        d’attente qui réécrit en dernier les données de la ressource.<br />
      </p>
      <img src="../assets/info/Image2.png" height="100" class="center" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Infos" /*
  props: {
    msg: String
  }*/,
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
