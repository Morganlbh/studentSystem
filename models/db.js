const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/student',{useNewUrlParser:true},(err)=>{
    if(err){
        console.log('fail');
        return;
    }
    console.log('success');
    let studentSchema = new mongoose.Schema({
        name:String,
        sex:String,
        yuwen:Number,
        math:Number,
        English:Number,
    })
    let Student = mongoose.model('students',studentSchema);

    // new Student({
    //     name:'morgan',
    //     sex:'男',
    //     yuwen:70,
    //     math:80,
    //     English: 70,
    // }).save();

    exports.getAllStudent = function (callback) {
        Student.find().then((results)=>{
            callback(results);
        })
    }
    
    exports.addStudent = function (name,somebody,callback) {
        Student.findOne({name}).then((result)=>{
            if(!result){
                new Student(somebody).save().then(()=>{
                    callback('添加成功');
                })
            }else{
                callback('不能重复添加');
            }
        })
    }

    //删除学生的信息   如果存在就删除
    exports.removeStudent = function (name,callback) {
        Student.deleteOne({name}).then((result)=>{
            if(result.deletedCount){    //如果已经删除了改学生
                callback('学生已成功删除')
            }else{
                callback('没有这个学生,无法删除')
            }
        })
    }

    //编辑学生的信息   如果存在就编辑
    exports.updateStudent = function (name,somebody,callback) {
        Student.findOne({name}).then((result)=>{
            if(result){ //如果找到指定的学生
                Student.updateOne(result,{$set:somebody}).then(()=>{
                    callback('成功修改该学生的信息')
                })
            }else{
                callback('没有这个学生,无法修改')
            }
        })

    }

    //查看学生的信息   如果存在就查看
    exports.checkStudent = function (name,callback) {
        Student.findOne({name}).then((result)=>{
            if(result){ //如果找到了该学生
                callback(result)
            }else{
                callback('对不住了,没有这个学生~~')
            }
        })
    }

});