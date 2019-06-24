const express = require('express');
const controller = require('./controller/controller');
const bodyParse = require('body-parser');
const app = express();
app.set('view engine','ejs');
//展示首页
app.get('/',controller.showIndex);
app.use(bodyParse.urlencoded({
    extended:false,
}))

//展示添加学生的页面
app.get('/addStudent',controller.showAdd);
//用post 添加学生的数据
app.post('/addStudent',controller.addStudent);
//展示删除学生的页面
app.get('/removeStudent',controller.showRemove);
//用post 添加学生的数据
app.post('/removeStudent',controller.removeStudent);
//展示编辑学生的页面
app.get('/updateStudent',controller.showUpdate);
//修改数据库中指定的学生的信息
app.post('/updateStudent',controller.updateStudent);
//展示查看学生的页面
app.get('/checkStudent',controller.showCheck);
//查看数据库中指定的学生的信息
app.post('/checkStudent',controller.checkStudent);
app.use(express.static('public'));
app.listen(5000);