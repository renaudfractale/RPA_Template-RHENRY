<template>
   <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center orange-text">Starter Template of <br> Robotic Enterprise Framework Customed </h1>
      <div class="row center">
        <h5 class="header col s12 light">A modern framework based on Robotic Enterprise Framework Uipath</h5>
      </div>
      <div class="row center">
          <router-link :to="{ name : 'Infos'}" id="download-button" class="btn-large waves-effect waves-light orange">Get Started </router-link>
        
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
            <h5 class="center">Speeds up development</h5>

            <p class="light"> We have done most of the work for you to provide a default framework that integrates our custom components (automated mailings, summary of robot actions, integrated dispatcher ...)</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
            <h5 class="center">User Experience Focused</h5>

            <p class="light">By using elements and principles that reduce maintenance, we were able to create a framework that integrates components and reports that provide more feedback to the robot users. </p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Easy to work with</h5>

            <p class="light">We have provided detailed documentation and specific code examples to help new RPA developers get started. We are also always open to feedback and can answer any questions a user may have about REFC.</p>
          </div>
        </div>
      </div>

    </div>
    <br><br>
  </div>
  
</template>

<script>
export default {
  name: 'Home',/*
  props: {
    msg: String
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
