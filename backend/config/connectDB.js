const mongoose = require('mongoose');


const connectDB = () =>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log('Mongo DB connected to HOST: '+ con.connection.host)
    })
    
};
module.exports = connectDB;