import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobApplictionComponent } from './components/jobAppliction/job-appliction.component';

import {FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CreateJobComponent } from './components/create-job/create-job.component';

@NgModule({
  declarations: [
    AppComponent,
    JobApplictionComponent,
    ApplicantsComponent,
    JobsComponent,
    CreateJobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
