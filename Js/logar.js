async function get() {
    const response = await fetch('https://api-1-n9g1.onrender.com/usuarios');
    if (!response.ok) {
        throw new Error('Erro ao obter os dados');
    }
    return await response.json(); 
}

function validardados() {
    const usuario = document.getElementById('name').value;
    const senha = document.getElementById('senha').value; 
    if (usuario && senha !== "") {
        return { usuario, senha };
    } else {
        window.alert("Verifique os dados e tente novamente!");
        return null;
    }
}

async function logar(event) {
    event.preventDefault(); 

    const dados = validardados();
    if (!dados) return; 

    const { usuario, senha } = dados;
    try {
        const usuarios = await get();  
        const usuarioValido = usuarios.some(u => u.conta.nome === usuario && u.conta.senha === senha);

        if (usuarioValido) {
            const usuarioEncontrado = usuarios.find(u => u.conta.nome === usuario && u.conta.senha === senha);
            localStorage.setItem("usuario", usuario);
            localStorage.setItem("id", usuarioEncontrado.id);
            window.location.href = 'principal.html';  
        } else {
            alert('Usuário ou senha inválidos!');
        }

    } catch (error) {
        console.error('Erro:', error);
        alert('Houve um erro ao tentar fazer login. Tente novamente mais tarde.');
    }
}

document.getElementById('loginForm').addEventListener('submit', logar);
