import { Component, OnInit } from '@angular/core';
import { IdService } from '../provider/id.service';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.page.html',
  styleUrls: ['./switch.page.scss'],
})
export class SwitchPage implements OnInit {

  user: string;
  constructor(private id: IdService) { }
  
  changeId(user){
    this.id.saveId(user);
  }
  ngOnInit() {
  }

}
