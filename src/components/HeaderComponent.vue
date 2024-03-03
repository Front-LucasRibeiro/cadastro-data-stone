<template>
	<header class="header">

		<div class="header__logo">
			<router-link to="/cadastro-clientes">
				<img src="favicon.png" :alt="titulo" />
				<h1>{{ titulo }}</h1>
			</router-link>
		</div>

		<div class="header__menuMob" @click="openMenu">
			<img
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCUlEQVR4nO2YMWrDQBBFHxjpFMkZkjsox0gTEt/IFs4VVBg3Uo7gFKurxKrdxBi+SksCDbNG3gfTLTuPj1hGA4kHZAWsgQYITtUAX+o9KncA/oET0DrItep17VmNCa51cANk+JEBpXq/Dx38Af6c5XoyJVkzQB95LFo53KT/LmIRkuBMlpvgG3DWM2BRZ6CwFHzS2/htVBvdaSboRUiCM0kJRkvwFfg1HLGOutNU8Ggs+GIp6EVIgjNJCUZL8BnYGg4LW+thobj3ccuLkARnsowEW+74x73R+iHG6iMHurHVx6eegdJZMgd26v0xtn6rdLBzXL916rmfsiNEK7DaQS6oaiU3SS6xKC4NNyTsSazTmgAAAABJRU5ErkJggg==">
			Menu
		</div>

		<nav class="header__menu" v-show="menuMob">
			<ul>
				<li>
					<router-link to="/cadastro-clientes">Cadastro de clientes</router-link>
				</li>
				<li>
					<router-link to="/cadastro-produtos">Cadastro de produtos</router-link>
				</li>
				<li>
					<router-link to="/clientes">Clientes</router-link>
				</li>
				<li>
					<router-link to="/produtos">Produtos</router-link>
				</li>
				<li>
					<router-link to="/associar-produtos">Associar Produtos</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'HeaderComponent',
	props: {
		titulo: String
	},
	data(){
		return{
			menuMob: false
		}
	},
	mounted() {
		if (this.$route.path === '/') {
			this.$router.push('/cadastro-clientes');
		}

		if(window.innerWidth >= 1180){
			this.menuMob = true
		}
	},
	methods:{
		openMenu(){
			this.menuMob = !this.menuMob
		}
	}
}
</script>


<style lang="scss">
@import '../styles/variables';

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 14px;
	height: 70px;
	background-color: rgba(255, 255, 255, 0.9);
	box-shadow: 0 0 15px #ddd;
	position: relative;

	&__menuMob {
		display: none;
		position: absolute;
		right: 14px;
		top: 12px;
		flex-direction: column;
		font-weight: bold;
		font-size: 13px;

		@media (max-width: 1179px) {
			display: flex;
		}
	}

	@media (max-width: 1179px) {
		flex-direction: column;
		height: auto;
	}

	&__logo {

		@media (max-width: 1180px) {
			display: flex;
			align-self: baseline;
			max-width: 50px;
			font-size: 12px;
			white-space: nowrap;
			padding: 8px 0;
		}

		h1 {
			color: $main-color;
		}

		a {
			display: flex;
			align-items: center;
			text-decoration: none;

			img {
				margin-right: 18px;
			}
		}
	}

	&__menu {
		@media (max-width: 1180px) {
			// display: none;
		}

		ul {
			display: flex;
			list-style: none;
			padding: 0;

			@media (max-width: 1179px) {
				flex-direction: column;
			}

			li {
				margin-right: 22px;

				@media (max-width: 1179px) {
					margin: 12px 0;
				}

				a {
					text-decoration: none;
					color: #111;

					&:hover {
						color: $main-color;
					}

					&.router-link-active {
						color: $main-color;
					}
				}
			}
		}
	}



}
</style>
