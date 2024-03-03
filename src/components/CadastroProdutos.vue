<template>
  <main class="main">
    <h2 class="title">Cadastro de produtos</h2>

    <form @submit.prevent="cadastrar" class="form">
      <div class="form__field">
        <label for="nome">Nome:</label>
        <input type="text" name="nome" id="nome"  v-model="formData.nome">
      </div>
			<div class="form__fieldRadio">
        <label>Ativo:</label>
        <div class="form__fieldRadio--wrapRadios">
          <input type="radio" name="ativo" id="sim" value="sim" checked> 
          <label for="sim">Sim</label>
          <input type="radio" name="ativo" id="nao" value="nao">
          <label for="nao">Não</label>
        </div>
      </div>
      
      <button type="submit" class="button">Cadastrar</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'CadastroProdutos',

	data(){
		return {
      formData: {
        nome: '',
				ativo: ''
      },
    };
	},
	methods: {
    cadastrar() {
			let produtosLista = localStorage.getItem('produtos')
			let valueInputRadio = document.querySelector('input[type="radio"]:checked').value

			this.formData.ativo = valueInputRadio

			if(produtosLista){
				produtosLista = JSON.parse(produtosLista)
				produtosLista.push(this.formData)
				localStorage.setItem('produtos', JSON.stringify(produtosLista) )
			}else{
				localStorage.setItem('produtos', JSON.stringify([this.formData]) )
			}
    },
			
  },

}
</script>


<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/componentes';
@import '../styles/form';

</style>
