import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{jobs} from '../../model/jobs';
import {MyserviceService} from '../../service/myservice.service';
import {form} from '../../model/form';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  template: '<fa-icon icon="user"></fa-icon>'
})
export class JobsComponent implements OnInit {
  model=new jobs()
  cat:jobs[]=[]; //3
  getforms:form[]=[];
  model2=new form()
  public toggleButton:boolean=true;
  constructor(
    private router :Router,
    public service:MyserviceService
  ) { }

  submitted=false;
  submitForm(model:any){
    this.submitted=true;
    this.model.job_id=Math.floor(Math.random() * 100+ 1);
    this.service.Create(this.model).subscribe(res=>{
      // document.write('Form Saved!!');
      alert('Form Saved!!');

    })
    
  }
  showApp(data:any){
    window.scrollBy(0,1800); 
    var cs=document.getElementById("mytable")|| {style:{visibility:'hidden'}}
    cs.style.visibility='visible'  
    this.service.showAppById(data).subscribe((res:form[])=>{
      this.getforms=res;
      
    });
    this.service.showJobById(data).subscribe((res:jobs[])=>{
      this.cat=res;
      
    });

    
  }
  close(){
    var cs=document.getElementById("mytable")|| {style:{visibility:'visible'}}
    cs.style.visibility='hidden'
     
    window.scrollBy(0,-1800); 
    this.router.navigateByUrl('/jobs')
  }
  ngOnInit(): void {
    this.service.select().subscribe((res:jobs[])=>{
      this.cat=res;
      for(var i=0;i<this.cat.length;i++)
      {
      this.cat[i].toggleButton=true;


    }
   });
  }
}
