import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../models/member.model';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { Contract } from '../models/contract.model';

@Injectable()
export class SharedService {

  private productionUrl = "http://localhost:8080";
  private apiUrl = "/api/";

  constructor(private http: HttpClient) { }

  authenticateMember(email: string, password: string): Observable<Member> {
    email = email.trim();
    password = password.trim();  
    return this.http.get<Member>(this.apiUrl + 'AuthenticateMember/' + email + '/' + password + '/')
      .pipe(
        catchError(this.handleError<Member>(`authenticateMember email=${email}`))
      );
  }

  getContractByID(contract_id: string): Observable<Contract> {
    contract_id = contract_id.trim();  
    return this.http.get<Contract>(this.apiUrl + 'Contract/' + contract_id + '/')
      .pipe(
        catchError(this.handleError<Contract>(`getContractByID contract_id=${contract_id}`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return Observable.of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}
