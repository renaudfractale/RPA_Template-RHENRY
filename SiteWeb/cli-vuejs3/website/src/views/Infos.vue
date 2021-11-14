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
                Le ROBOT ENTREPRISE FRAMEWORK VANILLA (REF ou REFV) proposé par UIPATH est un
                outil de base pour implémenter des processus.
                <br />
                Les tâches des processus robotisés sont atomiser en
                TransactionItem dans un file d’attente. Cela permet d’avoir une
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

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m6"></div>
          </div>
        </div>
      </div>
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
