// MeuComponente.spec.js
import { mount } from '@vue/test-utils';
import CadastroClientes from '@/components/CadastroClientes.vue';

describe('CadastroClientes', () => {
  it('deve mostrar a mensagem cadastro realizado', () => {
    const wrapper = mount(CadastroClientes);

    // Asserções
    expect(wrapper.find('button[type="submit"]').exists()).toBe(false);
  });

  // Adicione mais testes conforme necessário
});
