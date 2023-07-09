/*
this will hold the Schema for the user

It explain the different fields of the use and how it will be stored in the mongodb 

*/

const { Schema, trusted } = require("mongoose");

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        minLength : 10,
        lowercase : true
    },
    userType : {
        type : String,
        required : true,
        default : "CUSTOMER",
        enum : ["CUSTOMER", "ADMIN"]
    }

    },{timestamps : true});

    /*
    define the collection name where it will be stored
    */

    module.exports = mangoose.model("User", userSchema);