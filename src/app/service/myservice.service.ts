import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import{form} from'../model/form';
import{jobs} from '../model/jobs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private apiServer = "http://localhost:4000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    constructor(private httpClient: HttpClient) { }

  Create(data:any): Observable<form> {
  //alert(data);
  return this.httpClient.post<form>(this.apiServer + '/applyform', JSON.stringify(data), this.httpOptions)
  .pipe(
    catchError(err => {
      throw 'error in source. Details: ' + err;
    })
  )
} 

save(data:any): Observable<jobs> {
  //alert(data);
  return this.httpClient.post<jobs>(this.apiServer+'/addJob',JSON.stringify(data ), this.httpOptions)
  .pipe(
    catchError(err => {
      throw 'error in source. Details: ' + err;
    })
  )
} 
select(): Observable<jobs[]> {
  
  return this.httpClient.get<jobs[]>(this.apiServer + '/showJobs')
  

  .pipe(
       catchError(err => {
        throw 'error in source. Details: ' + err;
      })  
  )
}
showAppById(data:any): Observable<form[]> {
  // alert(JSON.stringify(data.job_id));
  return this.httpClient.get<form[]>(this.apiServer + '/showform/'+data.job_id)
  .pipe(
       catchError(err => {
        throw 'error in source. Details: ' + err;
      }) 
  )
}
showJobById(data:any): Observable<jobs[]> {
  // alert(JSON.stringify(data.job_id));
  return this.httpClient.get<jobs[]>(this.apiServer + '/selectjob/'+data.job_id)
  .pipe(
       catchError(err => {
        throw 'error in source. Details: ' + err;
      }) 
  )
}
errorHandler(error:any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}
