const express = require('express');
const app = express();

// Middleware para processar JSON
app.use(express.json());


// Configuração da porta
const PORT = 3000;

// Rota para receber um objeto via POST
app.post('/create-product', (req, res) => {
  const objetoRecebido = req.body;

  // Verifica se o objeto foi enviado
  if (!objetoRecebido || Object.keys(objetoRecebido).length === 0) {
    return res.status(400).send('Objeto não enviado ou vazio.');
  }

  console.log('Objeto recebido:', objetoRecebido);

  res.status(200).send({ mensagem: 'Objeto recebido com sucesso!', objeto: objetoRecebido });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});



