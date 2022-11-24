/*

   Vue
   Exercício 01

   Lista de filmes em Vue

   Prof:  Daniel de Oliveira
   Aluno: [Tassiana Benamor]

 */

// Declaração do objeto contendo a coleção de filmes.

// Criar a instância do vue passando o objeto de dados como argumento.
const app = Vue.createApp (
  {
    data: function() {
      return {
        movies: [
          {
             "name": "Heartstopper",
             "city": "London",
             "image": "https://media.fstatic.com/bVWE6JAmb7JMzBMkChy7pGsmFEc=/268x386/smart/media/movies/covers/2022/04/FQKDPINWYA4lecC.jpg"
          },
          {
             "name": "Batman",
             "city": "Madrid",
             "image": "https://media.fstatic.com/J8rLXLXMYY2UhoyLPQY5fQ7ujGE=/268x386/smart/media/movies/covers/2021/10/FBs8-vLUUAIm94F.jpg"
          },
          {
             "name": "Ruptura",
             "city": "Paris",
             "image": "https://media.fstatic.com/FvYi689gqwvTIpTAM8KQUyqmva0=/268x386/smart/media/movies/covers/2022/04/302220220317-uau-posters-severence-series-3_3.jpg"
          },
          {
             "name": "Medida Provisória",
             "city": "Rio de Janeiro",
             "image": "https://media.fstatic.com/-WcJ9VnRp3fkvrbirR_osiMYjvM=/268x386/smart/media/movies/covers/2022/03/Sem_t%C3%ADtulo_OXVcfj4.png"
          }
       ]
      }
    }
  }
);

// Montar a aplicação - plugando o template.
app.mount("#app");