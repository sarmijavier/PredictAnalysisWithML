import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'

import router from './router/index'
import firebase from 'firebase'
import vuetify from './plugins/vuetify';

Vue.use(firestorePlugin)
Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD_xyLagq2WIR3yCf5O_uiVia8KRZJ4rP4",
    authDomain: "fabrica-memes-12679.firebaseapp.com",
    databaseURL: "https://fabrica-memes-12679.firebaseio.com",
    projectId: "fabrica-memes-12679",
    storageBucket: "fabrica-memes-12679.appspot.com",
    messagingSenderId: "86036449981",
    appId: "1:86036449981:web:aa44fa4862d87f6735c5d4",
    measurementId: "G-18J2282SGQ"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore()
export const storage = firebase.storage().ref('/images')
firebase.analytics();


new Vue({
    render: h => h(App),
    router,
    vuetify,
    components: { App }
}).$mount('#app')