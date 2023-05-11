const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const UserModel = require("./model");
const ExerciseModel = require("./exerciseModel");
const ContatUsModel = require("./contactusModel")
// for connecting the PORT
const PORT = 5000;

// for creating the API
app.post("/create", (req, res) => {
  const data = ExerciseModel(req.body);
  data
    .save()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

//for getting the data from database
app.get("/display", async (req, res) => {
  try {
    const data = await ExerciseModel.find();
    res.status(200).send(data);
  } catch {
    res.status(500).send("Api Failed To fetch");
  }
});

//Api for Signup function
app.post("/signup",async(req,res)=>{
  const userDetails= await UserModel(req.body)

  try{
      const userExist=await UserModel.findOne({
          email:req.body.email
      })
      //Asume email already exist_
      if(userExist){
          res.json("Email Already Exist")
      }else{
   //for new user
  userDetails.save();
  res.json("User Created Successfully")
      }
  }
  catch{
      console.log("Api failed")
  }
})
// API For Login
app.post("/login",async(req,res)=>{
  try{
      const LoginUser= await UserModel.findOne({
          email:req.body.email,
          password:req.body.password
      })
      //assume condition true/ credentials matched
      if(LoginUser){
       res.json({message:"Login Successfully",LoginUser:LoginUser})
      }else{
          res.json("userName or password is invalid")
      }
  }
  catch{}
})

//for getting the data from database
app.get("/show", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.status(200).send(data);
  } catch {
    res.status(500).send("Api Failed To fetch");
  }
});



// API endpoint for deleting an exercise
app.get("/getting/:id", async (req, res) => {
  try {
    const exerciseId = req.params.id;
    const result = await ExerciseModel.findById(exerciseId);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});



// API endpoint for deleting an exercise
app.delete("/delete/:id", async (req, res) => {
  try {
    const exerciseId = req.params.id;
    const result = await ExerciseModel.findByIdAndDelete(exerciseId);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// API endpoint for updating an exercise
app.put("/update/:id", async (req, res) => {
  try {
    const exerciseId = req.params.id;
    const updatedData = req.body;
    const result = await ExerciseModel.findByIdAndUpdate(
      exerciseId,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// for creating Contact Us API
app.post("/createcontactdata", (req, res) => {
  const data = ContatUsModel(req.body);
  data
    .save()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

// for connecting the DATABASE
mongoose.connect(
  "mongodb://127.0.0.1:27017/exerciseApp                                                                                                       ",
  { useNewUrlParser: true }
);
// for checking database connection
mongoose.connection.once("open", () => {
  console.log("Database Connected Succesfully");
});
// for checking PORT connection
app.listen(PORT, () => {
  console.log("PORT is connected at " + PORT);
});
