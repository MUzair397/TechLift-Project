const mongoose  = require("mongoose");
const ContactUsSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    textarea:{
        type:String
    }
});
module.exports = mongoose.model("ContactUs", ContactUsSchema);