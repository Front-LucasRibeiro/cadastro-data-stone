import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CadastroClientes from './components/CadastroClientes.vue';
import CadastroProdutos from './components/CadastroProdutos.vue';
import ListagemClientes from './components/ListagemClientes.vue';
import ListagemProdutos from './components/ListagemProdutos.vue';
import AssociarProdutos from './components/AssociarProdutos.vue';

const routes = [
  { path: '/', component: CadastroClientes },
  { path: '/cadastro-clientes', component: CadastroClientes },
  { path: '/cadastro-produtos', component: CadastroProdutos },
  { path: '/clientes', component: ListagemClientes },
  { path: '/produtos', component: ListagemProdutos },
  { path: '/associar-produtos', component: AssociarProdutos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
