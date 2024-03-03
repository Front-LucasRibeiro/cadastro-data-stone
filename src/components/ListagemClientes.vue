<template>
	<ModalMensagem msg="Edição realizada com sucesso" :exibe="showModal" @alterar-exibe-modal="changeExibeModal" />

	<main class="main">
		<h2 class="title">Listagem de clientes</h2>

		<div class="wrap">
			<table>
				<thead>
					<th>Nome</th>
					<th>RG</th>
					<th>Telefone</th>
					<th>E-mail</th>
					<th>Ativo</th>
					<th>Editar</th>
					<th>Ativar/Inativar</th>
				</thead>
				<tbody>
					<tr v-for="(item, index) in listaClientes" :key="index">
						<td>{{ item.nome }}</td>
						<td>{{ item.documento }}</td>
						<td>{{ item.telefone }}</td>
						<td>{{ item.email }}</td>
						<td>{{ item.ativo }}</td>
						<td>
							<button class="button btn-table" :data-nome="item.nome" :data-documento="item.documento"
								:data-telefone="item.telefone" :data-email="item.email" :data-ativo="item.ativo" @click="editarCliente">
								Editar
							</button>
						</td>
						<td><button class="button btn-table" :data-ativo="item.ativo" :data-documento="item.documento" @click="mudarStatusCliente">Alterar
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
					<label for="nome">Nome:</label>
					<input type="text" name="nome" id="nome">
				</div>
				<div class="form__field">
					<label for="documento">RG:</label>
					<input type="text" name="documento" id="documento" disabled>
				</div>
				<div class="form__field">
					<label for="telefone">Telefone:</label>
					<input type="text" name="telefone" id="telefone">
				</div>
				<div class="form__field">
					<label for="email">E-mail:</label>
					<input type="text" name="email" id="email">
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
				<button type="submit" class="button" @click="salvarEdicao">Salvar edição</button>
			</form>
		</div>

	</main>
</template>

<script>
import ModalMensagem from "@/components/ModalMensagem.vue";

export default {
	name: 'ListagemClientes',
	components: {
		ModalMensagem,
	},
	data() {
		return {
			showModal: false,
			listaClientes: [],
			showForm: false,
			listaVazia: false
		};
	},

	mounted() {
		let clientes = JSON.parse(localStorage.getItem('clientes'))
		this.listaClientes = clientes

		if(clientes === null){
			this.listaVazia = true
		}
	},

	methods: {
		editarCliente(e) {
			this.showForm = true;

			setTimeout(() => {
				let nome = e.target.dataset.nome
				let documento = e.target.dataset.documento
				let telefone = e.target.dataset.telefone
				let email = e.target.dataset.email
				let ativo = e.target.dataset.ativo

				let nomeInput = document.getElementById('nome')
				nomeInput.value = nome
				let documentoInput = document.getElementById('documento')
				documentoInput.value = documento
				let telefoneInput = document.getElementById('telefone')
				telefoneInput.value = telefone
				let emailInput = document.getElementById('email')
				emailInput.value = email
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

			let clientesLista = JSON.parse(localStorage.getItem('clientes'))
			let nome = document.getElementById('nome').value
			let documento = document.getElementById('documento').value
			let telefone = document.getElementById('telefone').value
			let email = document.getElementById('email').value
			let ativo = document.querySelector('input[name="ativo"]:checked').value
			
			clientesLista.map(cliente => {
				if(cliente.documento === documento){
					cliente.nome = nome
					cliente.documento = documento
					cliente.telefone = telefone
					cliente.email = email
					cliente.ativo = ativo
				}
			})

			this.listaClientes = clientesLista
			localStorage.setItem('clientes', JSON.stringify(clientesLista))

			this.showModal = true
			this.showForm = false;
		},
		mudarStatusCliente(e) {
			let clientesLista = JSON.parse(localStorage.getItem('clientes'))
			let ativo = e.target.dataset.ativo
			let documento = e.target.dataset.documento

			if(ativo === 'sim'){
				ativo = 'não'
			}else{
				ativo = 'sim'
			}

			clientesLista.map(cliente => {
				if(cliente.documento === documento){
					cliente.ativo = ativo
				}
			})

			this.listaClientes = clientesLista
			localStorage.setItem('clientes', JSON.stringify(clientesLista))

			this.showModal = true
			this.showForm = false;
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
	margin: 42px auto;
}
</style>
