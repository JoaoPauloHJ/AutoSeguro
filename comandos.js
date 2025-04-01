function atualizarContador() {
    // Defina a data final (Ano, Mês (0-11), Dia, Hora, Minuto, Segundo)
    var dataFinal = new Date(2025, 12, 9, 23, 59, 59); // 20 de março de 2025 às 23:59:59

    var agora = new Date();
    var diferenca = dataFinal - agora; // Diferença em milissegundos

    if (diferenca <= 0) {
        document.getElementById("contador").innerHTML = "Tempo esgotado!";
        clearInterval(intervalo); // Para a contagem quando atingir a data final
        return;
    }

    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = 
        `Faltam ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

// Atualiza o contador a cada segundo
var intervalo = setInterval(atualizarContador, 1000);

// Executa a função imediatamente para evitar espera de 1s
atualizarContador();

// function abrirProduto(produto) {
//     window.location.href = `produto.html?nome=${produto}`;
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const params = new URLSearchParams(window.location.search);
//     const nomeProduto = params.get('nome');

//     const produtos = {
//         "liquidificador": {
//             nome: "liquidificador",
//             imagem: "img/liquidificador.png",
//             link: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20-%20Liquidificador."
//         },
//         "airfryer": {
//             nome: "Air Fryer",
//             imagem: "img/airfryer.png",
//             link: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20-%20Air%20Fryer."
//         },
//         "sanduicheira": {
//             nome: "Sanduicheira",
//             imagem: "img/sandui.png",
//             link: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20-%20Sanduicheira."
//         }
//     };

//     if (document.getElementById("produto-imagem") && produtos[nomeProduto]) {
//         document.getElementById("produto-nome").textContent = produtos[nomeProduto].nome;
//         document.getElementById("produto-imagem").src = produtos[nomeProduto].imagem;
//         document.getElementById("produto-imagem").alt = produtos[nomeProduto].nome;
//         document.getElementById("botao-presentear").href = produtos[nomeProduto].link;
//     } else {
//         document.querySelector(".tamanho__grid2").innerHTML = "<h1>Produto não encontrado</h1>";
//     }
// });