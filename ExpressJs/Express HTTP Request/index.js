import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
res.send("<h1>Hello Localhost</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Me</h1><p>+91 98765 43210</p>");
    });

app.get("/about",(req,res)=>{
res.send("<h1>About Me</h1><p>Hi this is Shubham</p>");
});

app.listen(port,()=>{
    console.log(`Surver is running on port ${port}`);
});