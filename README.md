Descrição do Projeto
Este projeto é um sistema de controle financeiro, que permite aos usuários registrar, editar e excluir transações financeiras. Ele fornece uma interface interativa para gerenciar as transações de receita e despesa, além de exibir gráficos financeiros para facilitar a visualização do fluxo de caixa. O sistema é integrado com um backend utilizando Express, Prisma e MongoDB para armazenar e manipular os dados.

Funcionalidades:
Cadastro de Usuários: Permite registrar novos usuários no sistema.
Gerenciamento de Transações:
Adicionar novas transações (entrada ou saída).
Editar transações existentes.
Excluir transações.
Visualização de Dados: Exibe um resumo das transações e gráficos interativos sobre as finanças.
Gráficos: Utiliza o Chart.js para gerar gráficos de receitas vs despesas, além de gráficos de evolução mensal.
Tecnologias Utilizadas:
Frontend: HTML, CSS e JavaScript
Backend:
Express: Framework para a criação de APIs RESTful.
Prisma: ORM (Object-Relational Mapper) para interagir com o banco de dados.
MongoDB: Banco de dados NoSQL utilizado para armazenar as informações de usuários e transações.
Gráficos: Chart.js para exibição de gráficos de receitas e despesas.
Como Funciona:
O sistema permite que o usuário interaja com uma API backend através do frontend. O backend é responsável por fornecer as informações de usuários e transações e por manipular os dados recebidos, utilizando o Prisma para interagir com o banco de dados MongoDB. A API permite as seguintes operações:


