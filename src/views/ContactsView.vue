<template>
  <div class="title">
    <h1>Contacts</h1>
  </div>

  <FormView />

  <div v-for="contact in contacts" :key="contact.number" class="contact">
    <h2>{{ contact.name }}</h2>
    <p>{{ contact.number }}</p>
  </div>
</template>

<script>
  import FormView from '@/components/FormView.vue'
  export default {
    name: 'contactsView',
    components: {
      FormView
    },
    computed: {
      contacts() {
        return this.$store.state.contacts
      }
    },
  }
</script>
