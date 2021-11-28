<template>
   <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center orange-text"> {{ message[currentLocale].home.title1 }} <br> {{ message[currentLocale].home.title2 }} </h1>
      <div class="row center">
        <h5 class="header col s12 light">{{ message[currentLocale].home.subtitle }}</h5>
      </div>
      <div class="row center">
          <router-link :to="{ name : 'Infos'}" id="download-button" class="btn-large waves-effect waves-light orange">{{ message[currentLocale].home.getstart }}</router-link>
        
      </div>
      <br><br>

    </div>
  </div>


  <div class="container">
    <div class="section">

      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
            <h5 class="center">{{ message[currentLocale].home.speedtitle }}</h5>

            <p class="light">{{ message[currentLocale].home.speedtxt }}</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
            <h5 class="center">{{ message[currentLocale].home.usertitle }}</h5>

            <p class="light">{{ message[currentLocale].home.usertxt }}</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">{{ message[currentLocale].home.easytitle }}</h5>

            <p class="light">{{ message[currentLocale].home.easytxt }}</p>
          </div>
        </div>
      </div>

    </div>
    <br><br>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  props: {
    message: Object,
    currentLocale : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
