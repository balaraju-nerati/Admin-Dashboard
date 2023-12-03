const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(express.static('public'));


// app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
const url = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

app.get("/", async(req,res) => {
    // res.sendFile(path.join(__dirname,'/index.html'));
    try{
        const response = await axios.get(url);
        const result = response.data;        
        res.render("index.ejs", {
            userData: result
        });
    }catch (error) {
        console.log("Failed to make request:", error.message);
        res.send(error.message);
    }


});

app.listen(port,()=>{
    console.log(`Server is running at port: ${port}`);
});