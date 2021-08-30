import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{form} from '../../model/form';
import{jobs} from '../../model/jobs'
import {MyserviceService} from '../../service/myservice.service';
@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  model=new jobs()
  model2=new form()
  cat:jobs[]=[];
  constructor(
    private router :Router,
    public service:MyserviceService
  ) { }

  submitted=false;
  submitForm(model:any){
    this.submitted=true;
    this.model.job_id=Math.floor(Math.random() * 100+ 1);
    this.service.save(this.model).subscribe(res=>{
      alert('Form Saved!!');
      this.router.navigateByUrl('/jobs')
    })  
  }
  ngOnInit(): void {
    
  }
}
