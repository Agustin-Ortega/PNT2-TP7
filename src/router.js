import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from './componentes/formulario.vue'
import Usuarios from './componentes/usuariosMockApi.vue'
import Inicio from './componentes/inicio.vue'

Vue.use(VueRouter)

export const router = new VueRouter({

mode: 'history',
routes:[
{path:'/formulario', component: Formulario},
{path:'/usuarios-mockApi', component: Usuarios},
{path:'/inicio', component: Inicio},
]
})