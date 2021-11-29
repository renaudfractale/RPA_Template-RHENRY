<template>
   <formgetorchestrator :message="message" :currentLocale="currentLocale"></formgetorchestrator>
    <formsetorchestrator :message="message" :currentLocale="currentLocale"></formsetorchestrator>
</template>

<script>
import Form_GetOrchestrator from '../components/Form_GetOrchestrator.vue'
import Form_SetOrchestrator from '../components/Form_SetOrchestrator.vue'
export default {
  name: 'Form',
  components : {
    formgetorchestrator: Form_GetOrchestrator,
    formsetorchestrator: Form_SetOrchestrator
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
