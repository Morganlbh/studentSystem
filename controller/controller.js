const db = require('../models/db');
//展示首页
exports.showIndex = function(req,res){
    //获取数据库中所有学生的信息
    db.getAllStudent((results)=>{
        res.render('index',{
            results
        })
    })
}

//展示添加学生的页面
exports.showAdd = function(req,res){
    res.render('showAdd')
}

exports.addStudent = function(req,res){
    db.addStudent(req.body.name,req.body,(msg)=>{
        res.send(msg);
    });
}

//展示删除学生的页面
exports.showRemove = function(req,res){
    res.render('showRemove')
}
//向数据库删除指定的学生
exports.removeStudent = function(req,res){
    let name = req.body.name;
    db.removeStudent(name,(msg)=>{
        res.send(msg);
    });
}
//展示编辑学生的页面
exports.showUpdate = function(req,res){
    res.render('showUpdate')
}
//向数据库编辑指定的学生信息
exports.updateStudent = function(req,res){
    db.updateStudent(req.body.name,req.body,(msg)=>{
        res.send(msg);
    });
}
//展示查看学生的页面
exports.showCheck = function(req,res){
    res.render('showCheck')
}
//向数据库编辑指定的学生信息
exports.checkStudent = function(req,res){
    db.checkStudent(req.body.name,(msg)=>{
        res.send(msg);
    });
}