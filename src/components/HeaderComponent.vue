<template>
  <header class="header">

    <div class="header__logo">
      <router-link to="/">
        <h1>{{titulo}}</h1>
      </router-link>
    </div>

    <nav class="header__menu">
      <ul>
        <li>
          <router-link to="/cadastro-clientes">Cadastro de clientes</router-link>
        </li>
        <li>Cadastro de produtos</li>
        <li>Produtos</li>
        <li>Clientes</li>
        <li>Associar Produtos</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    titulo: String
  }
}
</script>


<style lang="scss">
@import '../styles/variables';

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 15px #ddd;


  &__logo{
    h1{
      color: $main-color;
    }
    a{
      text-decoration: none;
    }
  }

  &__menu{
    
    ul{
      display: flex;
      list-style: none;

      li{
        margin-right: 22px;

        a{
          text-decoration: none;
          color: #111;

          &:hover{
            color: $main-color;
          }

          &.router-link-active{
            color: $main-color;
          }
        }
      }
    }
  }

}

</style>
