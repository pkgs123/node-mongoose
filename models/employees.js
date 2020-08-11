let mongoose = require('mongoose');
let schema = mongoose.Schema;

const employeePersonalInfoaSchema = new schema({
    name:{
        type:String,
        required:true,
    },
    contactNo:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    }
})

let Employees = mongoose.model('Employee',employeePersonalInfoaSchema);
module.exports = Employees;