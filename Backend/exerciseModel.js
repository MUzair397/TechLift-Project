const mongoose  = require("mongoose");
const ExerciseSchema = mongoose.Schema({
    name:{
        type:String
    },
    duration:{
        type:String
    },
    date:{
        type:String
    }
});
module.exports = mongoose.model("Exercise", ExerciseSchema);