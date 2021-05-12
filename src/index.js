const express = require('express');
const app = express();
const port = 3030;
const bp = require('body-parser');
const qr = require('qrcode');

console.log(qr);

app.set('view engine', 'ejs');
app.use(bp.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/scan', (req, res) => {
  const { url } = req.body;
  if (!url) return res.json({ message: 'Empty Data' });
  qr.toDataURL(url, (err, src) => {
    if (err) return res.status(400).json({ message: 'Error occured' });
    res.status(200).json({
      URL: src,
    });
  });
});

app.listen(port, () => {
  console.log(`Server runnig on port ${port}`);
});
