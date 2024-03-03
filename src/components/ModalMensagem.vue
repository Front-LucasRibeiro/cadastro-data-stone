<template>
	<div class="modal" v-show="exibe">
		<div class="modal__conteudo">
			<div class="modal__fechar">
				<span @click="fecharModal">&times;</span>
			</div>
			<p>{{ msg }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ModalMensagem',
	props: {
		msg: String,
		exibe: Boolean,
	},
	methods: {
		fecharModal() {
			this.$emit('alterar-exibe-modal', false);
		}
	}
}
</script>


<style scoped lang="scss">
@import '../styles/variables';


.modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, .5);
	width: 100%;
	height: 100%;
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;

	&__fechar {
		display: flex;
		justify-content: flex-end;
		width: 100%;

		span {
			position: relative;
			font-size: 28px;
			width: 40px;
			height: 40px;
			font-weight: bold;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 0 0 0 3px;
			background-color: $main-color;
			color: $sec-color;
			cursor: pointer;
		}
	}

	&__conteudo {
		background-color: $sec-color;
		padding: 0 0 42px;
		border-radius: 5px;
		max-width: 480px;
		width: 100%;
	}
}
</style>
