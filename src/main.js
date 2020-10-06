import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyD-mtOT5lGmP5H4Nn68swMDVQnHZYev-vE",
    authDomain: "vue-calendar-c65a7.firebaseapp.com",
    databaseURL: "https://vue-calendar-c65a7.firebaseio.com",
    projectId: "vue-calendar-c65a7",
    storageBucket: "vue-calendar-c65a7.appspot.com",
    messagingSenderId: "1052950191706",
    appId: "1:1052950191706:web:fe7a1affa5b98391078263"
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')


/*
 apiKey: "AIzaSyD-mtOT5lGmP5H4Nn68swMDVQnHZYev-vE",
  authDomain: "vue-calendar-c65a7.firebaseapp.com",
  databaseURL: "https://vue-calendar-c65a7.firebaseio.com",
  projectId: "vue-calendar-c65a7",
  storageBucket: "vue-calendar-c65a7.appspot.com",
  messagingSenderId: "1052950191706",
  appId: "1:1052950191706:web:fe7a1affa5b98391078263"

*/