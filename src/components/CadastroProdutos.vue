<template>
	<ModalMensagem msg="Cadastro realizado com sucesso" :exibe="showModal" @alterar-exibe-modal="changeExibeModal" />
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
import ModalMensagem from "@/components/ModalMensagem.vue";

export default {
  name: 'CadastroProdutos',
	components: {
		ModalMensagem,
	},
	data(){
		return {
			showModal: false,
      formData: {
				id: 1,
        nome: '',
				ativo: '',
				exibeItem: true
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
				
				let tam = produtosLista.length
				this.formData.id = Number(produtosLista[tam - 1].id) + 1;
				
				produtosLista.push(this.formData)
				localStorage.setItem('produtos', JSON.stringify(produtosLista) )
			}else{
				localStorage.setItem('produtos', JSON.stringify([this.formData]) )
			}

			this.showModal = true

			this.formData.nome = ''
    },
		changeExibeModal(novoValor) {
			this.showModal = novoValor;
		}
			
  },

}
</script>


<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/componentes';
@import '../styles/form';

</style>
