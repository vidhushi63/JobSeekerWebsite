const express=require('express');
const router=express.Router();
const poolPromise =require('../connect');


exports.saveInfo=async(req,res)=>{
    var sql="Insert INTO form(Ejob_id,emp_id,firstname,lastname,email,phone,address,why) VALUES('"+req.body.Ejob_id+"','"+req.body.emp_id+"','"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.email+"','"+req.body.phone+"','"+req.body.address+"','"+req.body.why+"')";
    
    try{
      poolPromise.connect().then(() => {
          console.log('Connected to mysql...')
      }).catch(e => {
          console.error('Error connecting mysql...')
          process.exit()
        })
    
      poolPromise.executeQuery(sql).then((d) => {
          console.log(d);
          res.status(200).send(d)
        }).catch(e => {
          console.log(e);
          res.status(500).send('Sorry, something went wrong!')
        })
  }
  catch(err){
      res.status(500)
      res.send(err.message)
  }
}

exports.selectAll=async(req,res)=>{
  var sql="select * from form"
  try{
    poolPromise.connect().then(() => {
        console.log('Connected to mysql...')
    }).catch(e => {
        console.error('Error connecting mysql...')
        process.exit()
      })
      
    poolPromise.executeQuery(sql).then((d) => {
        console.log(d);
        res.status(200).send(d)
      }).catch(e => {
        console.log(e);
        res.status(500).send('Sorry, something went wrong!')
      })
    }
  catch(err){
    res.status(500)
    res.send(err.message)
  }
}


exports.getApplicant=async(req,res)=>{
  var sql="select * from form where form.Ejob_id='"+req.params.C_ID+"'"
  try{
    poolPromise.connect().then(() => {
        console.log('Connected to mysql...')
    }).catch(e => {
        console.error('Error connecting mysql...')
        process.exit()
      })
      
    poolPromise.executeQuery(sql).then((d) => {
        console.log(d);
        res.status(200).send(d)
      }).catch(e => {
        console.log(e);
        res.status(500).send('Sorry, something went wrong!')
      })
}
catch(err){
    res.status(500)
    res.send(err.message)
}
}
