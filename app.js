const express = require('express');
const controller = require('./controller/controller');
const app = express();
app.set('view engine','ejs');
//展示首页
app.get('/',controller.showIndex);


//展示添加学生的页面
app.get('/addStudent',controller.showAdd);

app.use(express.static('public'));
app.listen(5000);