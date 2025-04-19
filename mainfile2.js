var exp  = require("express")
var app = exp()
const port=1234

// EJS template engine setup
app.set("view engine","ejs")
app.set("views",__dirname+"/myfolder")

app.get("/",(req,res)=>{
    res.render("newfile",{sname:"manojkumar",rno:4,mark:94})
})

app.listen(port,()=>{
    console.log(`port listening at ${port}.....`)
})