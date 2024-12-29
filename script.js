// Seleção dos itens do menu
const menuItems = document.querySelectorAll('.item-menu');

// Função para destacar o item de menu selecionado
function selectLink() {
    menuItems.forEach(item => item.classList.remove('ativo'));
    this.classList.add('ativo');
}

// Atribuição de evento para cada item do menu
menuItems.forEach(item => item.addEventListener('click', selectLink));

// Expansão do menu lateral
const btnExpandir = document.querySelector('#btn-exp');
const menuLateral = document.querySelector('.menu-lateral');

btnExpandir.addEventListener('click', () => {
    menuLateral.classList.toggle('expandir');
});

// Função para alternar submenus para qualquer item de menu usando ID
function toggleSubmenu(event, menuId) {
    event.preventDefault(); // Impede o comportamento padrão do link
    const submenu = document.querySelector(`#${menuId} .submenu`);
    submenu.classList.toggle('show');
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

// Função para exibir conteúdo dinâmico conforme a opção selecionada
function exibirConteudo(tipo) {
    const conteudoDinamico = document.getElementById('conteudo-dinamico');

    let conteudoHtml = '';
    if (tipo === 'implantacao') {
        conteudoHtml = `
            <img src="Image/implantacao.jpg" alt="Imagem de Implantação">
            <h3>Implantação</h3>
            <button onclick="mostrarSobre()">Sobre</button>
        `;
    } else if (tipo === 'solicitar-pedido') {
        conteudoHtml = `
            <h3>Solicitar Pedido</h3>
            <p>Formulário para solicitar um pedido...</p>
        `;
    } else if (tipo === 'acompanhar-pedido') {
        conteudoHtml = `
            <h3>Acompanhar Pedido</h3>
            <p>Status atual dos pedidos...</p>
        `;
    } else if (tipo === 'solicitar-entrega') {
        conteudoHtml = `
            <h3>Solicitar Entrega</h3>
            <p>Formulário para solicitar uma entrega...</p>
        `;
    } else if (tipo === 'acompanhar-entrega') {
        conteudoHtml = `
            <h3>Acompanhar Entrega</h3>
            <p>Status atual das entregas...</p>
        `;
    } else if (tipo.startsWith('carro-')) {
        const numeroCarro = tipo.split('-')[1];
        conteudoHtml = `
            <h3>Carro ${numeroCarro}</h3>
            <p>Informações sobre o Carro ${numeroCarro}...</p>
        `;
    }
    conteudoDinamico.innerHTML = conteudoHtml;
}


// Função para exibir informações adicionais
function mostrarSobre() {
    alert("Informações sobre a implantação...");
}


    const users = {
            'adeilton.santos@r3s.com.br': 'Dezinhosantos7',
            'raphael.fonseca@r3s.com.br ': '*r3s@2018*',
            'guilherme.godoy@r3s.com.br ': '*r3s@2018*',
            'alex@r3s.com.br ': '*r3s@2018*'
    };

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
    
        if (!username || !password) {
            document.getElementById('loginError').textContent = 'Por favor, preencha todos os campos.';
            return;
        }
    
        // Verifica se o usuário e senha estão corretos
        if (users[username] && users[username] === password) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'portal.html';
        } else {
            document.getElementById('loginError').textContent = 'Usuário ou senha incorretos';
        }
    });