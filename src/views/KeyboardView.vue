<template>
    <div class="keyboard">
      <h1>Clavier</h1>
    </div>
    <div>
      <p>{{ this.$store.state.fund }}</p>
      <p>{{ this.$store.state.stock }}</p>
      <button @click="remove()">Effacer</button>
    </div>
    <div>
      <p @click="add(9)">9</p>
      <p @click="add(8)">8</p>
      <p @click="add(7)">7</p>
      <p @click="add(6)">6</p>
      <p @click="add(5)">5</p>
      <p @click="add(4)">4</p>
      <p @click="add(3)">3</p>
      <p @click="add(2)">2</p>
      <p @click="add(1)">1</p>
      <p @click="add(0)">0</p>
    </div>
    <button @click="call()">Appeler</button>
  </template>
  
  <script>

    export default {
      name: 'keyboardView',
      data(){
        return {
          appels:{
            name:'',
            number:'',
            date:new Date()
          }
        }
      },
      computed: { 
        individus() {
          return this.$store.state.contacts
        }
      },
      
      methods: {
        remove() {
          this.$store.state.stock=''
          this.$store.state.fund=''
        },

        call(){
        window.location.href = "http://localhost:8080/#/CallsView";
        },

        add(number) {
          if(this.$store.state.stock.length<9){
          this.$store.state.stock += number
          } else {
          this.$store.state.stock += number
          let check = this.individus.find(individus => individus.number == this.$store.state.stock.toString())
          if (check){
            this.appels.name = check.name
            this.appels.number = check.number
            this.$store.commit('appels',this.appels)
            this.$store.state.fund=check.name
            } else {
            this.$store.state.fund="Numéro non trouvé"
            }
          }  
        },
      }
    }
  </script> 