<template>
	<ModalMensagem :msg="msg" :exibe="showModal" @alterar-exibe-modal="changeExibeModal" />
	<main class="main">
		<h2 class="title">Cadastro de clientes</h2>

		<form @submit.prevent="cadastrar" class="form">
			<div class="form__field">
				<label for="nome">Nome:</label>
				<input type="text" name="nome" id="nome" v-model="formData.nome">
			</div>
			<div class="form__field">
				<label for="documento">RG:</label>
				<input type="tel" v-mask="['##.###.###-#', '##.###.###-##']" name="documento" id="documento"
					v-model="formData.documento">
			</div>
			<div class="form__field">
				<label for="telefone">Telefone:</label>
				<input type="tel" v-mask="['(##) ####-####', '(##) #####-####']" placeholder="(99) 9999-9999" name="telefone"
					id="telefone" v-model="formData.telefone">
			</div>
			<div class="form__field">
				<label for="email">E-mail:</label>
				<input type="email" name="email" id="email" v-model="formData.email">
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
import { mask } from 'vue-the-mask'

export default {
	name: 'CadastroClientes',
	directives: {
		mask
	},
	components: {
		ModalMensagem,
	},
	data() {
		return {
			msg: '',
			showModal: false,
			formData: {
				nome: '',
				documento: '',
				telefone: '',
				email: '',
				ativo: ''
			},
		};
	},
	methods: {
		cadastrar() {
			let clientesLista = localStorage.getItem('clientes')
			let valueInputRadio = document.querySelector('input[type="radio"]:checked').value

			this.formData.ativo = valueInputRadio

			let nomeValida = this.formData.nome.trim();
			let nomeCompleto = nomeValida.split(' ');

			// valida form 
			if (nomeCompleto.length < 2) {
				this.showModal = true
				this.msg = 'Deve ser informado o nome completo'
			}
			else if (this.formData.documento === '') {
				this.showModal = true
				this.msg = 'O campo RG não pode ser vazio'
			}
			else if (this.formData.documento.length < 12) {
				this.showModal = true
				this.msg = 'O campo RG não é válido'
			}
			else if (this.formData.telefone === '') {
				this.showModal = true
				this.msg = 'O campo Telefone não pode ser vazio'
			} else if (this.formData.telefone.length < 14) {
				this.showModal = true
				this.msg = 'O campo Telefone não é válido'
			}
			else {

				if (clientesLista) {
					clientesLista = JSON.parse(clientesLista)
					clientesLista.push(this.formData)
					localStorage.setItem('clientes', JSON.stringify(clientesLista))

				} else {
					localStorage.setItem('clientes', JSON.stringify([this.formData]))
				}

				this.msg = 'Cadastro realizado com sucesso'
				this.showModal = true

				this.formData.nome = ''
				this.formData.documento = ''
				this.formData.telefone = ''
				this.formData.email = ''
			}
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
