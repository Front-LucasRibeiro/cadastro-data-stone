<template>
	<ModalMensagem msg="Edição realizada com sucesso" :exibe="showModal" @alterar-exibe-modal="changeExibeModal" />

	<main class="main">
		<h2 class="title">Listagem de produtos</h2>

		<div class="wrap">
			<table>
				<thead>
					<th>Nome</th>
					<th>Ativo</th>
					<th>Editar</th>
					<th>Ativar/Inativar</th>
				</thead>
				<tbody>
					<tr v-for="(item, index) in listaProdutos" :key="index">
						<td>{{ item.nome }}</td>
						<td>{{ item.ativo }}</td>
						<td>
							<button class="button btn-table" :data-nome="item.nome" :data-id="item.id" :data-ativo="item.ativo" @click="editarProduto">
								Editar
							</button>
						</td>
						<td><button class="button btn-table" :data-ativo="item.ativo" :data-id="item.id" @click="mudarStatusProduto">Alterar
								Status</button></td>
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
					<label for="id">ID:</label>
					<input type="text" name="id" id="id" disabled>
				</div>
				<div class="form__field">
					<label for="nome">Nome:</label>
					<input type="text" name="nome" id="nome">
				</div>
				<div class="form__fieldRadio">
					<label>Ativo:</label>
					<div class="form__fieldRadio--wrapRadios">
						<input type="radio" name="ativo" id="sim" value="sim">
						<label for="sim">Sim</label>
						<input type="radio" name="ativo" id="nao" value="não">
						<label for="nao">Não</label>
					</div>
				</div>
				<button type="submit" class="button"  @click="salvarEdicao">Salvar edição</button>
			</form>
		</div>

	</main>
</template>

<script>
import ModalMensagem from "@/components/ModalMensagem.vue";

export default {
	name: 'ListagemProdutos',
	components: {
		ModalMensagem,
	},
	data() {
		return {
			showModal: false,
			listaProdutos: [],
			showForm: false,
			listaVazia: false
		};
	},

	mounted() {
		let produtos = JSON.parse(localStorage.getItem('produtos'))
		this.listaProdutos = produtos

		if(produtos === null){
			this.listaVazia = true
		}
	},

	methods: {
		editarProduto(e) {
			this.showForm = true;

			setTimeout(() => {
				let nome = e.target.dataset.nome
				let id = e.target.dataset.id
				let ativo = e.target.dataset.ativo

				let nomeInput = document.getElementById('nome')
				nomeInput.value = nome				
				let idInput = document.getElementById('id')
				idInput.value = id
				let ativoInput = document.querySelector('input[name="ativo"]')

				if (ativoInput.value === ativo) {
					let ativoInput = document.querySelector('input[name="ativo"]#sim')
					ativoInput.checked = 'checked'
				} else {
					let ativoInput = document.querySelector('input[name="ativo"]#nao')
					ativoInput.checked = 'checked'
				}
			}, 50);
		},
		salvarEdicao(e) {
			e.preventDefault();

			let produtosLista = JSON.parse(localStorage.getItem('produtos'))
			let nome = document.getElementById('nome').value
			let id = Number(document.getElementById('id').value)
			let ativo = document.querySelector('input[name="ativo"]:checked').value
			
			produtosLista.map(produto => {
				if(produto.id === id){
					produto.nome = nome
					produto.ativo = ativo
				}
			})

			this.listaProdutos = produtosLista
			localStorage.setItem('produtos', JSON.stringify(produtosLista))

			this.showModal = true
		},
		mudarStatusProduto(e) {
			let produtosLista = JSON.parse(localStorage.getItem('produtos'))
			let ativo = e.target.dataset.ativo
			let id = Number(e.target.dataset.id)

			if(ativo === 'sim'){
				ativo = 'não'
			}else{
				ativo = 'sim'
			}

			produtosLista.map(produto => {
				if(produto.id === id){
					produto.ativo = ativo
				}
			})

			this.listaProdutos = produtosLista
			localStorage.setItem('produtos', JSON.stringify(produtosLista))

			this.showModal = true
		},
		fecharForm(){
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
</style>
