let express = require('express');

let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// express 允许跨域
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTION');
	res.header('X-Powered-By', ' 3.2.1');
	if (req.method == 'OPTIONS')
		res.send(200); // 让option 请求快速反应
	else next();
});

// app.use(express.static(path.join(__dirname,'public')))
app.get('/', function(res, req) {
	res.send('首页');
});

app.post('/dologin', function(res, req) {
	console.log(req.body);
	res.json({ msg: 'post成功' });
});

app.listen(3667, '1.2.3.4');

// {
//   "dependencies":[
//     "ejs":"^2.5.6",
//     "express":"^4.15.3",
//     "socket.io":"^2.0.3",
//     "body-parser":"~1.17.1"
//   ]
// }

// 封装axios
// axiosGet(api) {
//   new Promise((resolve) => {
//     axios.get(api).then((res) => {
//       // console.log(res);
//       resolve(res);
//     });
//   });
// }
