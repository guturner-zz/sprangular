import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RandomNumberService {
  constructor(private http: Http) {
    
  }

  getRandomNumber(): any {
    return this.http
                .get('http://localhost:8080/randomNumber').map(response => response.text());
  }
}