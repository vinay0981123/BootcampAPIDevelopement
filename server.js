const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'});
const morgan = require('morgan');
const connectDB = require('./config/db')
const app = express();
const colors = require('colors');
const errorHandler = require('./middleware/error')
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
connectDB()
//Dev logging Middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
//Route files
const bootcamps = require('./routes/bootcamps')
//Mount routers
app.use('/api/v1/bootcamps',bootcamps)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`.red);
    server.close(()=>process.exit(1));
});


