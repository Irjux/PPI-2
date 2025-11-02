import express from 'express';

const host = '0.0.0.0';
const port = 3000;
var usuarios = 0;
const server = express();

server.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
    
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <title>Navbar Teste</title>

      <!-- Bootstrap -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </body>
    </html>
  `);
});

server.get("/cadastroUsuario" ,(req, res) =>{
  res.send( `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
    
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <title>Navbar Teste</title>

     <style>
        body{
            position: absolute;
            left: 400px;
            top: 100px;
        }
        strong{
            font-family: sans-serif;
        }
        label{
           color: rgba(0, 0, 255, 0.699);
           font-family: sans-serif;
        }
        #comentario{
            color: black;
        }
        #nome{
            background-color: rgba(255, 255, 255, 0.88);
            margin-left: 62px;
            padding-right: 100px;
        }
        #area{
            margin-left: 40px;
        }
        #fone{
            margin-left: 55px;
        }
        
        ::placeholder{
            color: rgba(0, 0, 0, 0.603);
        }
    </style>
</head>
<body>
    <strong>Cadastro de Perfil de Cliente</strong>
    
    <form method="POST" action="/dados"><br>
        <label id="nomelabel">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Ex: Israel Júnior...">
 

    <br>
        <label id="arealabel">Área de<br> interesse:</label>
        <input type="text" id="area" name="area" placeholder="Ex: Desenvolvedor Back-end">
    

    <br>
        <label id="fonelabel">Celular:</label>
        <input type="text" id="fone" name="fone" placeholder="Ex: (99)99999-9999"   />
  <br>

    
        <label id="comentario">Comentários:</label><br>
        <textarea placeholder="Digite algo..."></textarea><br>
        <br>
        <input type="reset" value="Limpar" id="limpa">
        <input type="submit" value="Gravar" id="salva">
    </form>
    </body>
    </html>
  `);});

  server.post("/dados", (req, res) =>{
    
    console.log("Usuário cadastrado!");
    usuarios.push();

    } );
server.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}`);
});
