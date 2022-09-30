// Imports external
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const morgan = require("morgan");
const cors = require("cors")

// files imports
// const User = require("./Model/User.model")
const AuthRouter = require("./Routes/Auth.routes");
const MemberRouter = require("./Routes/Members.routes.js")
// const PostRouter = require("./Routes/Post.routes");
const userAuthentication = require("./Controller/Auth.middleware");
const { ClientRouter } = require("./Routes/Client.routes");

const {ProjectRouter} = require("./Routes/Project.routes")



require('dotenv').config()
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("common"));

app.use("/time", timeController)
// Login Singup routes
app.use("/user", AuthRouter)
app.use("/clients" , ClientRouter)
app.use("/project" , ProjectRouter)

// login user authentication middleware
app.use(userAuthentication)



app.use("/member", MemberRouter);
//  User Routes
// app.use("/user", UserRouter);

// Post Routes
// app.use("/posts", PostRouter);


// app.get("/", async (req, res) => {

//     const { email, userId } = req.body
//     const user = await User.find({ _id: userId })
//     res.status(201).send("home page" + " " + user)
// })



const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    maxPoolSize: 1000

}
try {

    mongoose.connect(process.env.MONGOURL, connectionParams)

    console.log('connected to db')

}
catch (err) {
    console.log('err connection to db ', err)
}


app.listen(process.env.PORT, () => {
    console.log("Connected to Port" + " " + process.env.PORT)
})