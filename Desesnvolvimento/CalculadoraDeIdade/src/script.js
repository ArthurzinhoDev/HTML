
document.getElementById('btnCalcular').addEventListener('click', function(){
    const input = document.getElementById('anoNascimento');
    const resultado = document.getElementById('resultado');
    const anoAtual = new Date().getFullYear();
    const ano = parseInt(input.value, 10);

    resultado.style.color = '';
    if (!ano || isNaN(ano)) {
        resultado.textContent = 'Por favor, insira um ano válido.';
        resultado.style.color = '#ff6b6b';
        return;
    }
    if (ano < 1900) {
        resultado.textContent = 'O ano deve ser maior ou igual a 1900.';
        resultado.style.color = '#ff6b6b';
        return;
    }
    if (ano > anoAtual) {
        resultado.textContent = 'O ano não pode ser maior que o ano atual.';
        resultado.style.color = '#ff6b6b';
        return;
    }

    const idade = anoAtual - ano;
    resultado.textContent = `Você tem ${idade} anos.`;
    resultado.style.color = '#9fe39f';
});

document.getElementById('anoNascimento').addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        document.getElementById('btnCalcular').click();
    }
});