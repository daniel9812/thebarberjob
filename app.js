const express = require ('express');
const path = require ('path');
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
//
const app = express();
//
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
 app.use(express.static("public"));
//hola mundo
app.get('/', (req, res)=>{
    res.render('index');
});
     
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

