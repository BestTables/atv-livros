import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClock, faEnvelope, faPhone, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCcMastercard, faCcPaypal, faCcVisa, faInstagram, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faUser)
library.add(faCartShopping)
library.add(faHeart)
library.add(faTruck)
library.add(faStar)
library.add(faThumbsUp)
library.add(faSquareTwitter)
library.add(faInstagram)
library.add(faSquareFacebook)
library.add(faPhone)
library.add(faClock)
library.add(faEnvelope)
library.add(faCcPaypal)
library.add(faCcMastercard)
library.add(faCcVisa)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
