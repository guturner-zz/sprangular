import { Component } from '@angular/core';
import { RandomNumberService, RandomNumberResponse } from './services/RandomNumberService';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [ RandomNumberService ]
})
export class AppComponent { 
  
  res: any;

  constructor(private service:RandomNumberService) {
    this.callService();
  }

  callService() {
    this.service.getRandomNumber().subscribe(
      (val: RandomNumberResponse) => this.res = val.num,
      (err: Error) => this.res = "** das-boot is offline! **"
    );
  }
}
