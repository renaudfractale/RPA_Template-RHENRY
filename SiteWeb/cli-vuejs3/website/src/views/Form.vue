<template>
   <formgetorchestrator :message="message" :currentLocale="currentLocale"></formgetorchestrator>
  
</template>

<script>
import Form_GetOrchestrator from '../components/Form_GetOrchestrator.vue'
export default {
  name: 'Form',
  components : {
    formgetorchestrator: Form_GetOrchestrator
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
