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