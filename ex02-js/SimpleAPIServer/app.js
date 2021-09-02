const express = require("express");
const app = express();
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('sampledata.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('[Database] Connected to the movies database');
});

app.use(express.static('public'));  //  public 폴더를 공용 영역으로 개방

//  View Engine을 위한 설정
app.set('views', __dirname + '/views'); //  view 엔진을 위한 view 저장 디렉터리
app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/movies', (req, res) => {
    var query = "SELECT rowId as id, title, director, year, image from movies";
    console.log("[Database:Query] " + query);
    db.all(query, (err, rows) => {
        if (err) {
            res.send('err:' + err);
        } else {
            res.setHeader("Content-Type", "text/json;chsrset=UTF-8");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.json({ "movies": rows });
        }
    });
});

app.get('/movies/:id', (req, res) => {
    var query = "SELECT rowId as id, title, director, year, image from movies where id=" + req.params.id;

    db.all(query, (err, rows) => {
        if (err) {
            res.send('err:' + err);
        } else {
            res.setHeader("Content-Type", "text/json;chsrset=UTF-8");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.json({ "movie": rows[0] });
        }
    });
});

app.listen(3000, () => {
    console.log("[Server] Simple API Server is listening on port 3000");
})