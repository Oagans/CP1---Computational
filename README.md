CP1 - Segundo semestre!
Este é um trabalho feito para a aula de Computational Thinking no curso de Web design, onde tivemos que projetar uma página web com uma requisição HTTP para uma API externa!
Para acessar a página no navegador, basta copiar e colar este link: https://oagans.github.io/CP1---Computational/ na aba de busca do browser de sua preferência.

Para realizar a tarafa, inicialmente criamos o botão que seria o gatilho para a requisição no nosso HTML, juntamente com uma div que mostraria na tela a requisição feita. No JS, para fazer tudo rodar como
proposto, primeiramente criamos duas consts para receber tanto o botão quanto a div, dentro do nosso JS, a partir do document.getElementById. Isso é necessário, pois sem essa "requisição", não conseguimos
nos referenciar à esses elementos, muito menos adicionar listener e eventos aos mesmos. Em seguida, partimos para a criação da função que faria a requisição e exibir os dados. Para que a função funcionasse, 
bastava utilizar função fetch() para que a requisição fosse feita. Mas para isso, tivemos que priemeiro criar uma constante com a url da nossa requisição, para que pudéssemos adicioná-la ao fetch(). Isto 
feito, utilizamos o then(response => response.json()), que converte a resposta da API para um objeto JavaScript. Em seguida o then(data => { ... }) executa uma função com os dados da API como parâmetro e mostra
o resultado da requisição da div com o textContent. O catch(error => { ... }) esta lá para tratar possíveis erros durante a requisição. Por fim, adicionamos um event listener ao botão para chamar a função buscarDados 
quando ele fosse clicado.

Isso explica o funcionamento principal da requisação! 
Em resumo :
- Quando clicamos no botão a função buscarDados é chamada.
- A função realiza uma requisição à API especificada.
- A resposta então é convertida para um JSON e é armazenada na variável data.
- E por fim os dados são exibidos na div "resultado"!
  
Escrevemos também alguns códigos a mais, para que a div "aparecesse" e "desaparecesse" ao clicar no botão! Puramente estético. Utilizamos propriedades de style no
JS para que isso fosse possível e adicionamos o código dessa função secundária à função principal.

Em relação à contribuição de cada um ao projeto, tanto eu, quanto o Lucas, desenvolvemos o projeto por um inteiro. Teoricamente ele (Lucas) ficou encarregado mais com a parte do JS e eu com a estruturação do HTML 
e CSS,  mas nós nos ajudamos durante o projeto inteiro idealizando ele conjuntamente, e só resolvemos fazer essa "separação" de campos para que os commits fossem feitos com maior facilidade! 

Integrantes: Matheus Nagao Shimoda (RM554602) e Lucas Ribeiro De Marco (RM554902).
