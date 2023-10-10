const express = require('express');
const app = express();
const port=  3000;


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

const indexRouter = require('./routes/routes');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



