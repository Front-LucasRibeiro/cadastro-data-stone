import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CadastroClientes from './components/CadastroClientes.vue';

const routes = [
  { path: '/', component: CadastroClientes },
  { path: '/cadastro-clientes', component: CadastroClientes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
