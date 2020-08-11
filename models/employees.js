let mongoose = require('mongoose');
let schema = mongoose.Schema;

const EmpExp = new schema({
        companyName:{
            type:String,
            required:true
        },
        Designation:{
            type:String,
            requried:true
        },
        totalYearOfExp:{
            type:Number,
            required:true
        },
        RelevantYearOfExp:{
                type:Number,
                required:true
        }
    },
    {timestamps:true

});


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
    },
    experienceDetails:[EmpExp]
    
},
    {
        timestamps:true
})

let Employees = mongoose.model('Employee',employeePersonalInfoaSchema);
module.exports = Employees;