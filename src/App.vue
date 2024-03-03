<template>
  <HeaderComponent titulo="Data Stone" />
  <router-view></router-view>
  <FooterComponent copy="Data Stone - CNPJ: 29.128.179/0001-49 - Todos os direitos reservados." />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html,
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
</style>
