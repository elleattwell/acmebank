import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcmeAccount } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  // We should declare this in a separate file which will house all of our API Urls
  apiUrl: string = 'http://localhost:8080/api/accounts';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<AcmeAccount[]> {

    /* 
      Since the assessment didn't mention anything about error handling I didn't implement it
      but it would be best practice to catch any errors should the API call fail
    */

    return this.http.get<AcmeAccount[]>(this.apiUrl);
  }
}