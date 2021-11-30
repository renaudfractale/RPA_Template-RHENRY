<template>
 <formprojets :message="message" :currentLocale="currentLocale"></formprojets>
   <formgetorchestrator :message="message" :currentLocale="currentLocale"></formgetorchestrator>
    <formsetorchestrator :message="message" :currentLocale="currentLocale"></formsetorchestrator>
    
</template>

<script>
import Form_GetOrchestrator from '../components/Form_GetOrchestrator.vue'
import Form_SetOrchestrator from '../components/Form_SetOrchestrator.vue'
import Form_Projets from '../components/Form_Projets.vue'

export default {
  name: 'Form',
  components : {
    formgetorchestrator: Form_GetOrchestrator,
    formsetorchestrator: Form_SetOrchestrator,
    formprojets : Form_Projets
    },
  props: {
    message: Object,
    currentLocale : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
