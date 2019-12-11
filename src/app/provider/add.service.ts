import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../models/data.model';
import { IdService } from './id.service';
 

@Injectable({
  providedIn: 'root'
})
export class AddService {
  private addDataURL = 'https://petrolmate.herokuapp.com/add_data?username=';
    
  constructor(public http: HttpClient,private id: IdService) {}

  async addData(user: string, distance: number, litre: number, price: number) {
    this.id.saveId(user);
    return await this.http.get<Data>(this.addDataURL+user+'&distance='+distance+'&litre='+litre+'&price='+price).toPromise();
  }
}
