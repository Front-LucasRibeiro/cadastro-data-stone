<template>
	<ModalMensagem msg="Associação de produtos realizada com sucesso" :exibe="showModal"
		@alterar-exibe-modal="changeExibeModal" />

	<main class="main">
		<h2 class="title">Associação de produtos</h2>

		<div class="wrap">
			<table>
				<thead>
					<th>Nome</th>
					<th>Produtos Associados</th>
					<th>Editar</th>
				</thead>
				<tbody>
					<tr v-for="(item, index) in listaClientes" :key="index">
						<td>{{ item.nome }}</td>
						<td>{{ item.produtosAssociados }}</td>
						<td>
							<button class="button btn-table" :data-nome="item.nome" :data-documento="item.documento"
								:data-itens="item.produtosAssociados" @click="editarCliente">
								Editar
							</button>
						</td>
					</tr>
				</tbody>
			</table>

			<p v-show="listaVazia" colspan="7" class="lista-vazia">Nenhum registro na lista</p>
		</div>

		<div v-show="showForm">

			<h2 class="title">Formulário de edição:</h2>

			<form class="form">
				<div class="form__fechar">
					<span @click="fecharForm">&times;</span>
				</div>
				<div class="form__field">
					<label for="nome">Nome:</label>
					<input type="text" name="nome" id="nome" disabled>
				</div>
				<div class="form__field">
					<label for="documento">RG:</label>
					<input type="text" name="documento" id="documento" disabled>
				</div>
				<div class="form__field">
					<label>Selecione os produtos que deseja associar:</label>
					<ul class="form__field--lista">
						<li v-for="(item, index) in listaProdutos" :key="index" :data-nome="item.nome" :data-id="item.id"
							@click="selecionarProduto">{{ item.nome }}</li>
					</ul>
				</div>

				<button type="submit" class="button" @click="salvarEdicao">Salvar edição</button>
			</form>
		</div>
	</main>
</template>

<script>
import ModalMensagem from "@/components/ModalMensagem.vue";

export default {
	name: 'AssociarProdutos',
	components: {
		ModalMensagem,
	},
	data() {
		return {
			showModal: false,
			listaClientes: [],
			listaProdutos: [],
			produtosSelecionados: [],
			showForm: false,
			listaVazia: false
		};
	},
	mounted() {
		let clientes = JSON.parse(localStorage.getItem('clientes'))
		this.listaClientes = clientes

		let produtos = localStorage.getItem('produtos')
		this.listaProdutos = JSON.parse(produtos)

		if(clientes === null){
			this.listaVazia = true
		}
	},
	methods: {
		editarCliente(e) {
			this.showForm = true;

			this.produtosSelecionados = []
			let elem = document.querySelectorAll(`.form__field--lista li`)
			elem.forEach(elem => {
				elem.classList.remove('selecionado')
			})

			setTimeout(() => {
				let nome = e.target.dataset.nome
				let documento = e.target.dataset.documento
				let itens = e.target.dataset.itens

				if (itens) {
					itens = itens.split(',')

					itens.map(item => {
						let elem = document.querySelector(`[data-nome="${item}"]`)
						elem.classList.add('selecionado')

						this.produtosSelecionados.push(item)
					})
				}

				let nomeInput = document.getElementById('nome')
				nomeInput.value = nome
				let documentoInput = document.getElementById('documento')
				documentoInput.value = documento

			}, 50);
		},

		salvarEdicao(e) {
			e.preventDefault();

			let clientesLista = JSON.parse(localStorage.getItem('clientes'))
			let documento = document.getElementById('documento').value

			clientesLista.map(cliente => {
				if (cliente.documento === documento) {
					cliente.produtosAssociados = this.produtosSelecionados.join(',')
				}
			})

			this.listaClientes = clientesLista
			localStorage.setItem('clientes', JSON.stringify(clientesLista))

			this.produtosSelecionados = []
			let elem = document.querySelectorAll(`.form__field--lista li`)
			elem.forEach(elem => {
				elem.classList.remove('selecionado')
			})

			this.showModal = true
		},
		selecionarProduto(e) {
			let nome = e.target.dataset.nome

			if (e.target.className === 'selecionado') {
				let elem = document.querySelector(`[data-nome="${nome}"]`)
				elem.classList.remove('selecionado')

				this.produtosSelecionados.map((item, index) => {
					if (item === nome) {
						this.produtosSelecionados.splice(index, 1)
					}
				})

			} else {
				let elem = document.querySelector(`[data-nome="${nome}"]`)
				elem.classList.add('selecionado')
				this.produtosSelecionados.push(nome)
			}
		},
		fecharForm() {
			this.showForm = false;
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
@import '../styles/table';
@import '../styles/form';

.wrap {
	overflow-x: auto;
	margin-top: 42px;
	max-height: 350px;
	max-width: max-content;
	overflow-x: hidden;
	margin: 42px auto;
}

.form__field--lista {
	list-style: none;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 14px 18px 28px;

	li {
		width: max-content;
		border: 1px solid #ddd;
		border-radius: 3px;
		padding: 8px 12px;
		margin: 14px 14px 0 0;
		cursor: pointer;

		&.selecionado,
		&:hover {
			background-color: $main-color;
			color: $sec-color;
		}

		&:last-child {
			margin-right: 0;
		}
	}
}
</style>
