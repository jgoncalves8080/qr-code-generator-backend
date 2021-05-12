const express = require('express');
const app = express();
const port = 3030;
const bp = require('body-parser');
const qr = require('qrcode');

app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/generate', (req, res) => {
  const { name } = req.body;
  if (!name) return res.json({ message: 'Empty Data' });
  qr.toDataURL(name, (err, src) => {
    if (err) return res.status(400).json({ message: 'Error occured' });
    res.status(200).json({
      URL: src,
    });
  });
});

app.listen(port, () => {
  console.log(`Server runnig on port ${port}`);
});
