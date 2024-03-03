<template>
	<barra class="pesquisa">
		<form class="form">
			<div class="form__field">
				<label for="pesquisar">Pesquisar:</label>
				<input type="text" @input="buscar" name="pesquisar" id="pesquisar"
					:placeholder="placeholderText">
			</div>
		</form>
	</barra>
</template>

<script>

export default {
	name: 'BarraPesquisa',
	props: {
		lista: Array,
		placeholderText: String,
		tipoPesquisa: String,
	},
	data() {
		return {
			listaClientes: this.lista,
			tipo: this.tipoPesquisa
		};
	},
	methods: {

		buscar(e) {
			e.preventDefault();

			let valueFiltro = e.target.value;
			let newLista = []

			if (this.listaClientes !== null) {
				this.listaClientes.map((cliente) => {
					let nome = cliente.nome.toLowerCase()
					let documento = "";

					valueFiltro = valueFiltro.toLowerCase()

					if(this.tipo.indexOf('rg') >= 0){
						documento = cliente.documento.toLowerCase()

						if (nome.indexOf(valueFiltro) >= 0 || documento.indexOf(valueFiltro) >= 0) {
							cliente.exibeItem = true
						} else {
							cliente.exibeItem = false
						}
					}else{
						if (nome.indexOf(valueFiltro) >= 0) {
							cliente.exibeItem = true
						} else {
							cliente.exibeItem = false
						}
					}


					newLista.push(cliente)
				})

				this.listaClientes = newLista

				this.$emit('nova-lista-filtrada', newLista);
			}
		}
	},
}
</script>


<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/componentes';
@import '../styles/table';
@import '../styles/form';

.wrap {
	overflow-x: auto;
	margin-top: 42px;
	max-height: 350px;
	max-width: max-content;
	margin: 42px auto;
}
</style>
