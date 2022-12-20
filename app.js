var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


app.use(function (req, res, next) {
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/index.html', function (req, res) {
    res.setHeader('contentType', 'text/html');
    res.write(html);
    res.end;
});

if (module === require.main) {
    // Start the server
    const server = app.listen(8080, () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
    });
}

module.exports = app;