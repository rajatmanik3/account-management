import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpService } from '../shared/services/http.service'
@Injectable()
export class TransactionService {
  categories: any[];
  private baseUrl = 'api/transaction/';
  public storeID : number;
  constructor(
    private httpService: HttpService
  ) { 
           
  }

  // Create transaction //
  create(formData): Observable<any> {
    return this.httpService.post(this.baseUrl+'create',formData);
  }

  // List transactions //
  list(): Observable<any> {
    return this.httpService.get(this.baseUrl+'list');
  }
}
