const express = require('express');
const serverConfig = require('./configs/server.config');
const app = express();
const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config');
const userModel = require('./models/user.model');


/**
 * logic to connect to mongodb and create an admin user
 * need to have the mongodb and running in your local machine
*/

mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

db.on("error", () => {
    console.log("Error while connecting to DB");
})

db.once("open", () => {
    console.log("DB is connected");

    init();
})


async function init() {
    /**
     * Initialize the mongo db
     * 
     * need to create the ADMIN user
     *check if th admin user is already present
    */
    let admin = await userModel.findOne({
        userId : "admin"

    })
    if(admin){
        console.log("Admin user already present")
        return;
    }

    admin = await usermodel.create ( {
        name: "Raj gupta",
        userId: "admin",
        email: "raajg7999@gmail.com",
        userType: "ADMIN",
        password: "Welcome1"
    });
    console.log(admin);

}
app.listen(serverConfig.PORT, () => {
    console.log(`server started on the port number ${serverConfig.PORT}`);
})