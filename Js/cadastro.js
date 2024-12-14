async function get() {
  const response = await fetch('https://api-1-n9g1.onrender.com/usuarios');
  if (!response.ok) {
      throw new Error('Erro ao obter os dados');
  }
  return await response.json();
}

async function post(conta) {
  await fetch('https://api-1-n9g1.onrender.com/usuarios', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ conta })
  }).then(response => {
      if (!response.ok) {
          throw new Error('Erro na resposta da API');
      }
      return response.json();
  });
}

function mostrarSenha() {
  const id = document.getElementById('senha');
  id.type = id.type === 'text' ? 'password' : 'text';
}

document.getElementById("cadastroForm").addEventListener("submit", cadastrarusuario, mostrarSenha);

async function cadastrarusuario(event) {
  event.preventDefault();

  const dados = await get();

  function verificardados() {
      const nome = document.getElementById('nome').value;
      const idade = parseFloat(document.getElementById('idade').value);
      const sexo = document.getElementById('sexo').value;
      const senha = document.getElementById('senha').value;

      let conta = {
          nome: "",
          idade: null,
          sexo: "",
          senha: ""
      };

      if (typeof nome === "string" && nome.length > 3) {
          conta.nome = nome;
      } else {
          window.alert('Nome de usuário inválido!');
          return;
      }

      if (idade >= 14 && idade < 120) {
          conta.idade = idade;
      } else {
          window.alert('Idade de usuário inválida!');
          return;
      }

      if (sexo) {
          conta.sexo = sexo;
      } else {
          window.alert('Sexo não informado!');
          return;
      }

      if (senha.length > 4) {
          conta.senha = senha;
      } else {
          window.alert('Senha de usuário muito curta!');
          return;
      }

      return conta;
  }

  const dadosconta = verificardados();
  if (dadosconta === undefined) {
      return;
  }

  let nomeExiste = dados.some(dado => dado.conta.nome === dadosconta.nome);
  if (nomeExiste) {
      alert('Esse usuário já existe!');
      return;
  }

  window.alert('Conta criada com sucesso!');
  await post(dadosconta);
  window.location.href = 'index.html'
}
