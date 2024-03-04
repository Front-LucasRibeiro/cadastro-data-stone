# cadastro-data-stone

> Projeto de cadastro de clientes com associação de produtos ao cliente.


## Como executar o projeto, abra o terminal e execute os códigos abaixo:

``` bash
# 1 - install dependencies
# 1 - instalar dependências do projeto em ambiente local, antes de executar o projeto
npm install -g @vue/cli
npm install


# 2 - serve with hot reload at localhost:8080
# 2 - rodar arquivos para desenvolvimento em ambiente local http://localhost:8080/
npm run serve

# 3 - build for production with minification
# 3 - rodar arquivos para produção, (rodar este comando somente se for subir o projeto para produção)
npm run build
```

# Node

Versão utilizada no projeto: v16.20.2

 - altere a versão do node com o NVM:
https://github.com/coreybutler/nvm-windows/releases/tag/1.1.9

 - node -v (ver a versão do node)
 - nvm ls (ver a versão do node que está sendo utilizada)
 - nvm use (alterar a versão do node que está sendo utilizada Ex: nvm use 16.20.2)


# Como foi resolver o teste:

Primeiro fiz um planejamento de como faria as telas e quais ferramentas utilizaria, criei a estrurura de componentes header, footer e paginas e alguns componentes para serem reutilizados modal e barra de pesquisa.

Componetizei alguns estilos css para serem usados no projeto com sass/scss,utilizei a metodologia BEM não utilizei nenhuma lib para estilo do projeto, utilizar medidas relativas de fontes.

Utilizei rotas e armazenei os dados da aplicação direto no navegador no localStorage.
