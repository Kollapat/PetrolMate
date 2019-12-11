import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from "../models/data.model"
import { ViewService } from '../provider/view.service'
import { IdService } from '../provider/id.service';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.page.html',
  styleUrls: ['./previous.page.scss'],
})
export class PreviousPage implements OnInit {

  user = this.id.getId();
  view$: Observable<Data>;

  constructor(private view: ViewService,private id: IdService) {}

  viewData(user: string){
    console.log('call')
    this.view$ = this.view.viewData(user);
  }

  formatNumber(input) {
    return input.toFixed(3);
  }

  ngOnInit() {
    console.log('call')
    this.viewData(this.user);
  }

}
