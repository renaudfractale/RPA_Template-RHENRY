<template>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center orange-text">{{ message[currentLocale].menus.aboutdev }}</h1>
      <div class="row center">
        <h5 class="header col s12 light">{{ message[currentLocale].aboutdev.txt }}</h5>
      </div>
       </div>
  </div>
 <div class="container">
    <div class="section">

      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m8">
          <img src="../assets/header-bg.jpg" height="300">  
        </div>

        <div class="col s12 m4">
         <img src="../assets/man.jpg" height="300">  
        </div>

      </div>

    </div>
    <br><br>
  </div>

</template>

<script>
export default {
  name: 'AboutDev',
  props: {
    message: Object,
    currentLocale : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
