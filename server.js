const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const PORT =3000;
const app = express();


const loginRouter = require('./router/login');


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('login');
});

app.use('/login', loginRouter);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
