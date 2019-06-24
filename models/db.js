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
});