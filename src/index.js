const express = require('express');
const app = express();
const port = Process.env.PORT || 3030;
const qr = require('qrcode');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/generate', (req, res) => {
  const { name, funcao, nif } = req.body;
  const info = `Nome: ${name} \n Função: ${funcao} \n NIF: ${nif}`;

  if (!info) return res.json({ message: 'Empty Data' });
  qr.toDataURL(info, (err, src) => {
    if (err) return res.status(400).json({ message: 'Error occured' });
    res.status(200).json({
      data: src,
    });
  });
});

app.listen(port, () => {
  console.log(`Server runnig on port ${port}`);
});
