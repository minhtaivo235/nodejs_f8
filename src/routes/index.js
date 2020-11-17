
const newsRouter = require('./news.route');
const siteRouter = require('./site.route');

function route(app) {


    // app.get('/', (req, res) => {
    //     res.render('home');
    // });
    // app.get('/news', (req, res) => {
    //     // console.log(req.query);
    //     res.render('news');
    // });

    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    // app.get('/search', (req, res) => {
    //     res.render('search'); // sinh ra view
    // });
    // app.post('/news', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    // });

}

module.exports = route;