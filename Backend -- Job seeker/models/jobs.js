const express=require('express');
const router=express.Router();
const poolPromise =require('../connect');


exports.saveInfo=async(req,res)=>{
    var sql="Insert INTO jobs(job_id,profile,company,job_desc,salary,skills,experience,location,requirement) VALUES('"+req.body.job_id+"','"+req.body.profile+"','"+req.body.company+"','"+req.body.job_desc+"','"+req.body.salary+"','"+req.body.skills+"','"+req.body.experience+"','"+req.body.location+"','"+req.body.requirement+"')";
    
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


exports.selectJobs=async(req,res)=>{
  var sql="select * from jobs"
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


exports.selectJobById=async(req,res)=>{
  var sql="select * from jobs where job_id="+req.params.ID;

  
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
