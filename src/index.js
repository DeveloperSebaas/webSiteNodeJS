const express = require('express');
const app = express();
const path = require('path');

// Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');  

// Middlewares

// Routes
// app.get('/', (req, res) => {
  // res.send('Hello World');
  // console.log(path.join(__dirname, 'views/index.html'));
  // res.sendFile(path.join(__dirname, 'views/index.html'));
  // res.render('index.ejs', { title: 'First Website' }); 
// });

app.use(require('./routes/index'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Listening the server 
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});