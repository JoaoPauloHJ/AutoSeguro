// Função para lidar com o formulário de venda
document.getElementById('vehicle-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui você normalmente enviaria os dados para o servidor
    const formData = {
        type: document.getElementById('vehicle-type').value,
        brand: document.getElementById('vehicle-brand').value,
        model: document.getElementById('vehicle-model').value,
        year: document.getElementById('vehicle-year').value,
        price: document.getElementById('vehicle-price').value,
        mileage: document.getElementById('vehicle-mileage').value,
        description: document.getElementById('vehicle-description').value
    };
    
    console.log('Dados do formulário:', formData);
    alert('Anúncio cadastrado com sucesso! (simulação)');
    
    // Limpar o formulário
    this.reset();
});

// Simulação de login (para demonstração)
document.querySelector('.login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log('Tentativa de login:', { email, password });
    alert('Login simulado - verifique o console para os dados');
});

// Comandos.js - Script para gerenciar a exibição de produtos e modais de pagamento

const produtos = [
    {
        nome: "Liquidificador",
        valor: "R$ 99,00",
        imagem: "img/liquidificador.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Olá,%20Gostaria%20de%20reservar%20esse%20presente%20-%20Liquidificador."
    },
    {
        nome: "Air Fryer",
        valor: "R$ 399,00",
        imagem: "img/airfryer.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Olá,%20Gostaria%20de%20reservar%20esse%20presente%20-%20Air%20Fryer."
    },
    {
        nome: "Sanduicheira",
        valor: "R$ 159,00",
        imagem: "img/sandui.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Olá,%20Gostaria%20de%20reservar%20esse%20presente%20-%20Sanduicheira."
    },
    {
        nome: "Jogo de Panelas",
        valor: "R$ 159,00",
        imagem: "/img/panelas.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20de%20Panelas)."
    },
    {
        nome: "Panela De Pressao",
        valor: "R$ 264,99",
        imagem: "/img/panelapressao.png", 
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Panela%20de%20Pressao).",
    },
    {
        nome: "Jogo de Copos",
        valor: "R$ 184,00",
        imagem: "../img/jogocopos2.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20de%20Copos).",
        
    },
    {
        nome: "Micro Ondas",
        valor: "R$ 74,00",
        imagem: "../img/microondas.png", 
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Micro%20-%20Ondas).",

    },
    {
        nome: "Escorredor de Louças",
        valor: "R$ 98,00",
        imagem: "../img/escorredor.png", 
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Escorredor%20de%20Louças).",

    },
    {
        nome: "Jogo de Pratos",
        valor: "R$ 63,00",
        imagem: "../img/pratos.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20de%20Pratos).",

    },
    {
        nome: "Kit de Utensilios",
        valor: "R$ 42,00",
        imagem: "../img/kitutensilios.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Kit%20de%20Utensilios).",

    },
    {
        nome: "Travessa de Vidro",
        valor: "R$ 32,00",
        imagem: "../img/TravessaDeVidro.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Travessa%20de%20Vidro).",

    },
    {
        nome: "Kit Porta Tempero",
        valor: "R$ 52,00",
        imagem: "../img/portatempero.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Kit%20Porta%20Tempero).",

    },
    {
        nome: "Jogo De Facas",
        valor: "R$ 99,00",
        imagem: "../img/facas.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Jogo%20De%20Facas).",

    },
    {
        nome: "Faqueiro Buzios",
        valor: "R$ 89,90",
        imagem: "../img/faqueirobuzios.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Faqueiro%2024%20Peças).",

    },
    {
        nome: "Kit Pote Hermeticos",
        valor: "R$ 105,00",
        imagem: "../img/poteshermeticos.png",
        pagamento: "https://checkout.nubank.com.br/DiNnlzaRiG92botq",
        whatsapp: "https://wa.me/5534996920066/?text=Ol%C3%A1,%20Gostaria%20de%20reservar%20esse%20presente%20(Kit%20Potes%20Hermeticos).",

    }
    // Adicione novos produtos aqui facilmente
];

const container = document.getElementById("produtos-container");

produtos.forEach((produto, index) => {
    const produtoHTML = `
      <div class="tamanho__grid">
        <img src="${produto.imagem}" alt="${produto.nome}" class="secundario__imagem imagem">

        <h2 class="descricao__texto">
          <a target="_blank" class="descricao__texto">${produto.nome}</a>
        </h2>
        <br>
        <p class="container__valor">${produto.valor}</p>
        <button class="botao-modal" onclick="abrirModal(${index})">🎁 Quero Presentear!</button>

        <div class="modal-overlay" id="modal-${index}" style="display: none;">
          <div class="modal-conteudo">
            <p class="descricao__textoP">Escolha uma opção:</p>
            <div class="modal-botoes">
              <a href="${produto.pagamento}" target="_blank" class="botao-modal-opcao">💳 Pagar agora</a>
              <a href="${produto.whatsapp}" target="_blank" class="botao-modal-opcao botao-whatsapp">📱 Reservar via WhatsApp e pagar depois!</a>
            </div>
            <button class="modal-fechar" onclick="fecharModal(${index})">Fechar</button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += produtoHTML;
});

function abrirModal(index) {
    document.getElementById(`modal-${index}`).style.display = "flex";
}

function fecharModal(index) {
    document.getElementById(`modal-${index}`).style.display = "none";
}


