import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../models/data.model';
import { IdService } from './id.service';


@Injectable({
  providedIn: 'root'
})
export class ViewService {

  private viewDataURL = 'https://petrolmate.herokuapp.com/show_data?username=';
    
    constructor(public http: HttpClient, private id: IdService) {}


    viewData(user: string) {
      const username = this.id.getId();
      return this.http.get<Data>(this.viewDataURL+username);
    }
}
