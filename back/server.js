const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const cors = require('cors')
require('dotenv').config();
const authController = require('./controllers/authController')
const blogController = require('./controllers/blogController')
const multer = require('multer')


const app = express()



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authController)
app.use('/blog', blogController)


const port = process.env.PORT || 5000;



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected");
})

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images')
    },
    filename: function(req, file, cb){
        cb(null, req.body.filename)
    }
})

const upload = multer({
    storage: storage
})

app.post('/upload', upload.single("image"), async(req, res) => {
    return res.status(200).json({msg: "Successfully uploaded"})
})

app.listen(process.env.PORT, () => console.log('Server Connected'))
