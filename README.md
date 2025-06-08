# e.Commerce

Esta é uma aplicação web desenvolvida com Vue.js 3. O projeto consome a API [DummyJSON](https://dummyjson.com/products) para buscar e exibir os produtos.

## Funcionalidades

A aplicação conta com as seguintes funcionalidades:

* **Página Inicial (Home):** Apresenta vitrines de produtos.
* **Navegação por Categorias:** Um menu de navegação permite ao usuário explorar produtos por diferentes categorias.
* **Página de Catálogo:** Exibe uma lista de produtos de uma categoria específica com sistema de paginação.
* **Página de Detalhes do Produto:** Mostra informações completas de um produto, incluindo:
    * Galeria de imagens.
    * Título, descrição, marca e categoria.
    * Avaliação em formato de estrelas.
    * Preço e opções de parcelamento.
    * Status de estoque (disponível ou indisponível).
    * Seleção de quantidade.
    * Botão para adicionar o produto ao carrinho.
* **Animações e Efeitos Visuais:** Utiliza a biblioteca [GSAP](https://gsap.com/) para animações suaves no cabeçalho e na barra de navegação, que se oculta ao rolar a página para baixo e reaparece ao rolar para cima.
* **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela.
* **Feedback de Carregamento:** Exibe "skeletons" enquanto os dados dos produtos estão sendo carregados, melhorando a experiência do usuário.

## Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e bibliotecas:

* **[Vue.js 3](https://vuejs.org/)**
* **[Vue Router](https://router.vuejs.org/):** Para gerenciamento das rotas da aplicação.
* **[Axios](https://axios-http.com/):** Para realizar as requisições HTTP à API de produtos.
* **[Tailwind CSS](https://tailwindcss.com/):** Para a estilização.
* **[GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/):** Para criar animações.
* **[Lucide](https://lucide.dev/):** Para a utilização de ícones.

## 🖥️ Como Rodar a Aplicação Localmente

Para executar este projeto em sua máquina local, siga os passos abaixo.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

### Instalação

1.  Clone o repositório para sua máquina:
    ```bash
    git clone https://github.com/leobalbo/p2_front.git
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd p2_front
    ```

3.  Instale as dependências do projeto com o npm (ou yarn):
    ```bash
    npm install
    ```
    *ou*
    ```bash
    pnpm install
    ```

### Executando o Projeto

Após a instalação das dependências, inicie o servidor de desenvolvimento:

    npm run dev

ou

    pnpm dev

A aplicação estará disponível em http://localhost:5173 (ou outra porta que for indicada no seu terminal).



## Telas da Aplicação

Abaixo estão algumas capturas de tela das principais funcionalidades do projeto.

### 1. Página Inicial
*Apresenta as vitrines de produtos e a navegação principal.*
![Página Inicial com Vitrines de Produtos](https://img001.prntscr.com/file/img001/U9gSrVexSZylOB0LeTnHRw.png)

### 2. Página de Catálogo
*Lista os produtos de uma categoria específica, com controles de paginação.*
![Página de Catálogo com Paginação](https://img001.prntscr.com/file/img001/3vVhk4rXQhyK1I1Fk5JLFg.png)

### 3. Página de Detalhes do Produto
*Exibe todas as informações de um produto, galeria de imagens e opções de compra.*
![Página de Detalhes do Produto](https://img001.prntscr.com/file/img001/e71xtyamT_uvvjm1x9s2_g.png)


