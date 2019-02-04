import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../interfaces/response.interface';
import { environment } from '../environment/environment.dev';
@Injectable({
  providedIn: 'root'
})
export class FloorsService {

  constructor(
    private http: HttpClient
  ) { }

  getFloors() {
    console.log('Getting Floors');
    return this.http.get<IResponse>( environment.SERVER_IP + '/floors');
  }

  getFloorDetails(id: string) {
    console.log('Getting Floor Details');
    return this.http.get(environment.SERVER_IP + '/floor/' + id);
  }

  increaseFloorCount(id: string, amount: number) {
    console.log('Increase +1');
    console.log(amount);
    return this.http.post(environment.SERVER_IP + '/floor/' + id, { amount: amount });
  }

  decreaseFloorCount(id: string, amount: number) {
    console.log('Decrease -1');
    console.log(amount);
    return this.http.put(environment.SERVER_IP + '/floor/' + id, { amount: amount });
  }
}
