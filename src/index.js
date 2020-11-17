const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//import route
const route = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

// handle data from form when click submit
// handleBars
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// XMLHttpRequest, fetch, axios
app.use(express.json());

//http logger
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
