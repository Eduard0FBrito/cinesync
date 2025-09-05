-----

### **CINESync**

Uma aplicação web para descobrir e gerenciar seus filmes favoritos.

\<br\>

\<p align="center"\>
\</p\>

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

  * **React** - Biblioteca JavaScript para a interface de usuário.
  * **Vite** - Ferramenta de build que proporciona um ambiente de desenvolvimento rápido.
  * **CSS** - Estilização da aplicação.
  * **The Movie Database (TMDB) API** - API utilizada para buscar informações sobre filmes.

## ✨ Funcionalidades

  * **Página Inicial:** Exibe uma lista dos filmes mais bem avaliados.
  * **Detalhes do Filme:** Permite visualizar informações detalhadas de cada filme, como sinopse, avaliação, gêneros, etc.
  * **Gerenciamento de Favoritos:** Adicione ou remova filmes da sua lista de favoritos.
  * **Busca por Filmes:** Encontre filmes específicos através da barra de pesquisa.

## ⚙️ Como Usar

Siga os passos abaixo para rodar o projeto localmente.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
    ```

2.  **Entre no diretório do projeto:**

    ```bash
    cd SEU_REPOSITORIO
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Crie um arquivo `.env` na raiz do projeto** e adicione a chave da API do TMDB. Você pode obter sua chave registrando-se no [site do TMDB](https://www.themoviedb.org/documentation/api).

    ```env
    VITE_API_KEY=SUA_CHAVE_AQUI
    VITE_API=https://api.themoviedb.org/3/movie/
    VITE_SEARCH=https://api.themoviedb.org/3/search/movie
    VITE_IMG=https://image.tmdb.org/t/p/w500/
    VITE_GENRES=https://api.themoviedb.org/3/genre/movie/list
    ```

5.  **Inicie a aplicação:**

    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:5174` ou na porta especificada pelo Vite.
Com este `README.md`, seu projeto ficará mais profissional e será mais fácil para outras pessoas entenderem e interagirem com ele. Se precisar de ajuda com o processo de subir o código para o GitHub ou qualquer outra coisa, é só me dizer\!
