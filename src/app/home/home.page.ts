import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from "../models/data.model"
import { ViewService } from '../provider/view.service'
import { IdService } from '../provider/id.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

 
  view$: Observable<Data>;
  viewList:any = [];

  constructor(private view: ViewService, private id: IdService) {}

  viewData(user: string){
    const obj = this;
    (async () => {
      const dataList = await this.view.viewData(this.id.getId()).toPromise();
      obj.viewList = dataList;
      console.log(dataList);
    })();
    return this.view.viewData(this.id.getId());
  }

  formatNumber(input) {
    return input.toFixed(3);
  }

  ngOnInit() {
  }
}
