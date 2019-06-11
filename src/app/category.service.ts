import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Category } from './Models/Category';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url="http://localhost:50308/api/Categories/"

  constructor(private http:HttpClient) { }
  
  token = localStorage.getItem('token')

  header = new HttpHeaders({
    'Authorization':'Bearer '+ this.token
  })

  addCategory(body){
    return this.http.post<Category>(this.url,body,{headers:this.header}).pipe(
      catchError(this.handleError)
    );
  }

getallCategory(){
  return this.http.get<Category[]>(this.url,{headers:this.header}).pipe(
    catchError(this.handleError)
  );
}

deleteCategory(id){
  return this.http.delete(this.url+id,{headers:this.header}).pipe(
    catchError(this.handleError)
  );
}

getcategorybyid(id){
  return this.http.get(this.url+id+'/',{headers:this.header}).pipe(
    catchError(this.handleError)
  );
}
updatecategory(id,body){
  return this.http.put(this.url+id+"/", body,{headers:this.header}).pipe(
    catchError(this.handleError)
  );
}


 

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    if(error.status ==400)
    { 
      return throwError(
        'invalid request '
      )
    
    
    }
else if(error.status ==0)
{
  return throwError(
    'server not found '
  )
}
    return throwError(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};


}
