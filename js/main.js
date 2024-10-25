const botao = document.getElementById('meuBotao');
const resultado = document.getElementById('resultado');


function buscarDados() {

    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    fetch(url)
        .then(response => response.json())
        .then(data => {

            resultado.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
            resultado.textContent = 'Ocorreu um erro ao buscar os dados.';
        });
}


botao.addEventListener('click', buscarDados);
