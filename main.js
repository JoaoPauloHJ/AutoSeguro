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