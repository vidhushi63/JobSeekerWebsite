import { Component, OnInit } from '@angular/core';
import{jobs} from '../../model/jobs';
import {Router} from '@angular/router';
import{form} from '../../model/form';
import {MyserviceService} from '../../service/myservice.service';
@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  model=new jobs()
  getJobs:jobs[]=[]; 
  model2=new form()
  getforms: form[]=[];

  public i:number=0;
  public count:number=0;
  results: Array<{ ques_id: number; marked: string; }> = [];

 
  constructor(
    private router :Router,
   
    public service:MyserviceService
  ) { }
  // TakeQuiz(data:any){
  //   this.service.showQuizById(data).subscribe((res:form[])=>{
  //     this.getforms=res;
  //     // var cs=document.getElementById("sub")|| {style:{visibility:'hidden'}}
  //     // cs.style.visibility='visible'  
  //   });
     
  // }
  
  
  ngOnInit(): void {
    // this.service.showAppById(data).subscribe((res:form[])=>{
    //   this.getforms=res;
    //   // var cs=document.getElementById("sub")|| {style:{visibility:'hidden'}}
    //   // cs.style.visibility='visible'  
    // });
  }


}
