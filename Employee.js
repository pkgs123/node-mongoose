let mongoose = require('mongoose');

const Employees = require('./models/employees');

const url = 'mongodb://localhost:27017/EmployeeRecords';

const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log('Connected correctly to the Database');

    Employees.create({
        name:'Prashant Kumar Singh',
        contactNo:8356851305,
        Address:'Ghansoli Sec-6, NaviMumbai'
    })
    //Employee.save()
    .then((data) =>{
        console.log(`Data ${data}`);
        return Employees.find({}).exec();
    })
    .then((emprecords) =>{
        console.log(emprecords);
        return Employees.remove({});
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err);
    })
})