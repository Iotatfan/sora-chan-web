import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "../src/external/style/css/iostyle.css"

// const path = require('path');
library.add(faChevronRight, faGithub, faTwitter)
const app = createApp(App).use(router)

app.component('fa-icon', FontAwesomeIcon)
window.vue = app
require('./external/loader')

app.mount('#app')

