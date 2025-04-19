var exp  = require("express")
var app = exp()
const port=1234

// EJS template engine setup
app.set("view engine","ejs")
app.set("views",__dirname+"/views")

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(port,()=>{
    console.log(`port listening at ${port}.....`)
})