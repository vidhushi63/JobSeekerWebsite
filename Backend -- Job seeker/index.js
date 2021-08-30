var express=require('express');
var bodyParser=require('body-parser');
var app=express();
router=express.Router();

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","origin, X-requested-with,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
    });
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json({
    limit:'50mb'
}));
app.use(bodyParser.urlencoded({
    limit:'50mb',
    permanentlimit:100000,
    extended:true
}));
const jobs=require("./models/jobs");
const form=require("./models/form");
app.post("/addJob",jobs.saveInfo);
app.post("/applyform",form.saveInfo);
app.get("/showJobs",jobs.selectJobs);
app.get("/showform/:C_ID",form.getApplicant);
app.get('/selectForms',form.selectAll);
app.get("/selectJob/:ID",jobs.selectJobById);


var server=app.listen(process.env.PORT || 4000,function(){
    var port=server.address().port;
    console.log('App running on the port',port);
})