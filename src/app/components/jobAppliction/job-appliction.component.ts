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
  selector: 'app-job-appliction',
  templateUrl: './job-appliction.component.html',
  styleUrls: ['./job-appliction.component.css']
})
export class JobApplictionComponent implements OnInit {
  model=new form()
  model2=new jobs()
  cat:jobs[]=[];
  constructor(
    private router :Router,
    public service:MyserviceService
  ) { }

  submitted=false;
  submitForm(model:any){
    this.submitted=true;
    this.model.emp_id=Math.floor(Math.random() * 100+ 1);
    this.service.Create(this.model).subscribe(res=>{
      alert('Form Saved!!');
      this.router.navigateByUrl('/jobs')
    })  
  }
  ngOnInit(): void {
    this.service.select().subscribe((res:jobs[])=>{
      this.cat=res;
   });
  }
  }


    


