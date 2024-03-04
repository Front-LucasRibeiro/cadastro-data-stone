import { mount } from '@vue/test-utils';
import CadastroClientes from '@/components/CadastroClientes.vue';

describe('CadastroClientes', () => {
  it('deve conter o botão de cadastro', () => {
    const wrapper = mount(CadastroClientes);

    // Asserções
		const botao = wrapper.find('.button');
    expect(botao.exists()).toBe(true);
  });
});
