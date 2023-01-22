import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        name:'JEREM',
        number: "0782555250",
      }
    ],
    appels:[
      {
        name:'JEREMY',
        number:'0782555250',
        date:new Date()
      }
    ],
    stock:'',
    found:''
  },
  getters: {
  },
  mutations: {
    addContact (state,contacts) {
      state.contacts.push(contacts)
    },
    appels(state,check){
      state.appels.push(check)
    }
  },
  actions: {
  },
  modules: {
  }
})
