const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Статика (CSS, JS, картинки)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// HTML страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'services.html'));
});
app.get('/booking', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'booking.html'));
});
app.get('/clients', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'clients.html'));
});

// Обработка бронирования
app.post('/booking', (req, res) => {
  console.log('Nowa rezerwacja:', req.body);
  res.send('<h2>Dziękujemy za rezerwację! <a href="/">Powrót do strony głównej</a></h2>');
});

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});