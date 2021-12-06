<template>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br /><br />
      <h1 class="header center orange-text">
        {{ message[currentLocale].form.tuto }} <br />
        {{ message[currentLocale].home.title2 }}
      </h1>
      <div class="row center col s12">
        <a
          href="https://www.youtube.com/channel/UCNynH6FdEtr7bP_sEsSQc0g"
          target="_blank"
          id="download-button"
          class="btn-large waves-effect waves-light orange"
          >Tuto Youtube</a
        >
      </div>
    </div>
  </div>
  <formprojets :message="message" :currentLocale="currentLocale"></formprojets>
  <formgetorchestrator
    :message="message"
    :currentLocale="currentLocale"
  ></formgetorchestrator>
  <formsetorchestrator
    :message="message"
    :currentLocale="currentLocale"
  ></formsetorchestrator>
</template>

<script>
import Form_GetOrchestrator from "../components/Form_GetOrchestrator.vue";
import Form_SetOrchestrator from "../components/Form_SetOrchestrator.vue";
import Form_Projets from "../components/Form_Projets.vue";

export default {
  name: "Form",
  components: {
    formgetorchestrator: Form_GetOrchestrator,
    formsetorchestrator: Form_SetOrchestrator,
    formprojets: Form_Projets,
  },
  props: {
    message: Object,
    currentLocale: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
