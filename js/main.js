const botao = document.getElementById('meuBotao');
const resultado = document.getElementById('resultado');


resultado.style.display = "none"

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

    

    if (resultado.style.display === "none") {
        resultado.style.display = "block";
    } else {
        resultado.style.display = "none";
    }
    
    resultado.style.backgroundColor = "rgba(255, 255, 255, 0.151)"
}

botao.addEventListener('click', buscarDados);
