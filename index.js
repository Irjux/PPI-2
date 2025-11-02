import express from "express";

const host = "0.0.0.0";
const port = 3000;
const usuarios = [];

const server = express();
server.use(express.urlencoded({ extended: true }));


server.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sistema de Cadastro</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      <style>
        body {
          background-color: #f8f9fa;
        }
        .navbar-brand {
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .container {
          margin-top: 100px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">PPI - Cadastro</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link active" href="/">Início</a></li>
              <li class="nav-item"><a class="nav-link" href="/cadastroUsuario">Cadastrar</a></li>
              <li class="nav-item"><a class="nav-link" href="/listarusuarios">Listar Usuários</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container">
        <h1 class="display-6 mb-4 text-primary">Bem-vindo ao Sistema de Cadastro</h1>
        <p class="lead">Utilize o menu acima para cadastrar ou visualizar usuários.</p>
        <a href="/cadastroUsuario" class="btn btn-primary btn-lg mt-3">Ir para o Cadastro</a>
      </div>
    </body>
    </html>
  `);
});


server.get("/cadastroUsuario", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cadastro de Usuário</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      <style>
        body {
          background-color: #f1f4f7;
        }
        .form-container {
          max-width: 600px;
          margin: 80px auto;
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
        }
      </style>
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">PPI - Cadastro</a>
        </div>
      </nav>

      <div class="form-container">
        <h3 class="text-center mb-4 text-primary">Cadastro de Perfil de Cliente</h3>
        <form method="POST" action="/dados">
          <div class="mb-3">
            <label class="form-label">Nome:</label>
            <input type="text" name="nome" class="form-control" placeholder="Ex: Israel Júnior..." required>
          </div>
          <div class="mb-3">
            <label class="form-label">Área de interesse:</label>
            <input type="text" name="area" class="form-control" placeholder="Ex: Desenvolvedor Back-end" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Celular:</label>
            <input type="text" name="fone" class="form-control" placeholder="Ex: (99) 99999-9999" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Comentários:</label>
            <textarea name="comentario" class="form-control" placeholder="Digite algo..." rows="3"></textarea>
          </div>
          <div class="d-flex justify-content-between">
            <input type="reset" value="Limpar" class="btn btn-outline-secondary">
            <input type="submit" value="Gravar" class="btn btn-primary">
          </div>
        </form>
      </div>
    </body>
    </html>
  `);
});


server.post("/dados", (req, res) => {
  const { nome, area, fone, comentario } = req.body;
  usuarios.push({ nome, area, fone, comentario });
  console.log(`Usuário cadastrado: ${nome}`);
  res.redirect("/listarusuarios");
});


server.get("/listarusuarios", (req, res) => {
  let conteudo = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Lista de Usuários</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="bg-light">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">PPI - Cadastro</a>
        </div>
      </nav>

      <div class="container mt-5">
        <h2 class="text-center text-primary mb-4">Lista de Usuários Cadastrados</h2>
        <table class="table table-bordered table-striped align-middle text-center">
          <thead class="table-primary">
            <tr>
              <th>Nome</th>
              <th>Área</th>
              <th>Celular</th>
              <th>Comentário</th>
            </tr>
          </thead>
          <tbody>
  `;

  if (usuarios.length === 0) {
    conteudo += `
      <tr>
        <td colspan="4" class="text-muted">Nenhum usuário cadastrado ainda.</td>
      </tr>`;
  } else {
    for (let u of usuarios) {
      conteudo += `
        <tr>
          <td>${u.nome}</td>
          <td>${u.area}</td>
          <td>${u.fone}</td>
          <td>${u.comentario}</td>
        </tr>`;
    }
  }

  conteudo += `
          </tbody>
        </table>
        <div class="text-center mt-3">
          <a href="/cadastroUsuario" class="btn btn-success">Cadastrar Novo</a>
          <a href="/" class="btn btn-secondary">Voltar</a>
        </div>
      </div>
    </body>
    </html>
  `;
  res.send(conteudo);
});

server.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}`);
});
