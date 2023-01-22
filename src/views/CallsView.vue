<template>
  <div>
    <h1>Appels</h1>
    <div v-for="appel in appels" :key="appel.date">
      <h2>Vous avez appelé {{ appel.name }}({{  appel.number }}) Date : {{ appel.date }} </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appelsView',
  computed:{
    appels(){
      return this.$store.state.appels
    }
  }
}
</script>