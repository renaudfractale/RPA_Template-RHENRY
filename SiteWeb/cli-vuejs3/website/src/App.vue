<template>
 <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><img src="./assets/logo.png" style="padding: 5px;" >
      <ul class="right hide-on-med-and-down">
        <li> <router-link :to="{ name : 'Home'}">Home</router-link></li>
       <li> <router-link :to="{ name : 'Infos'}">Infos</router-link></li>
       <li> <router-link :to="{ name : 'Form'}">Form</router-link></li>
        <li> <router-link :to="{ name : 'About'}">About Dev</router-link></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
       <li> <router-link :to="{ name : 'Home'}">Home</router-link></li>
        <li> <router-link :to="{ name : 'Infos'}">Infos</router-link></li>
        <li> <router-link :to="{ name : 'Form'}">Form</router-link></li>
         <li> <router-link :to="{ name : 'About'}">About Dev</router-link></li>
      </ul>
      <a data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
<router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>
