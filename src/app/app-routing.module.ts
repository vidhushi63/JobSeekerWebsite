import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobApplictionComponent } from './components/jobAppliction/job-appliction.component';
import {JobsComponent} from './components/jobs/jobs.component';
import{ApplicantsComponent} from './components/applicants/applicants.component';
import{CreateJobComponent} from './components/create-job/create-job.component';
const routes: Routes = [
    { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  { path: 'apply', component:JobApplictionComponent },
  { path: 'jobs', component:JobsComponent },
  // { path: 'forms', component: ApplicantsComponent},
  { path: 'createJob', component:CreateJobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
