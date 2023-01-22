<template>
    <div>
        <form @submit.prevent="addContact">
            <input type="text" placeholder="name" v-model="formContact.name">
            <input type="text" placeholder="numero" v-model="formContact.number">
            <button type="submit">Créer</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "formContact",
        data() {   
            return {
                formContact: {
                    name: '',
                    number: '',
                }
            }

        },
        computed: {
            contacts() {
                return this.$store.state.contacts
            }
        },
        methods: {
            addContact () {
                if(this.formContact.name == '' || this.formContact.number == "") return
                this.$store.commit('addContact', this.formContact)
                this.formContact = {
                    name: null,
                    number: null
                }
            }
        },
    }
</script>