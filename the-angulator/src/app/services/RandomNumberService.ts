import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export class RandomNumberResponse {
  num: number;

  /**
   * Helper method to map JSON to an object.
   */
  fromJSON(json: JSON) {
    for (var propName in json) {
      this[propName] = json[propName];
    }
    return this;
  }
}

@Injectable()
export class RandomNumberService {
  constructor(private http: Http) { }

  getRandomNumber(): any {
    return this.http.get('http://localhost:8080/randomNumber').map(response => new RandomNumberResponse().fromJSON(response.json()));
    /**
     * Before, our service was simply returning a single string representing a random number.
     * We used 
     *  .map(response => response.text())
     * because we were simply grabbing the number as plain text and returning it.
     */
  }

  
}