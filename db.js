const mongoose =require("mongoose");


function connectDB(){

    mongoose.connect('mongodb+srv://hafizjunaidahmedansari:ansari12345@cluster0.aybff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    // mongoose.connect('mongodb+srv://hafizjunaid971:Jahanzaib11october@test1.k1etu.mongodb.net/junaidcars',
    {useUnifiedTopology:true, useNewUrlParser:true})
    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose


