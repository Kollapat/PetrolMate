import { Component, OnInit } from '@angular/core';
import { AddService } from '../provider/add.service';
import { Observable } from 'rxjs';
import { Data } from '../models/data.model';
import { IdService } from '../provider/id.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  changeId(user: string){
    this.id.saveId(user);
  }
  
  user = this.id.getId();
  distance: number;
  litre: number;
  price: number;
  add$: Observable<Data>;

  constructor(private add: AddService, private id: IdService) {}

  addData(user: string, distance: number, litre: number, price: number){
    this.add.addData(user, distance, litre, price);
  }
  ngOnInit() {
  }


  buttonText = 'Add Data'
  buttonColor = 'success'
  buttonText2 = 'Cancel'
  buttonColor2 = 'danger'
  onClick(click){
    this.buttonText = 'Data Added Successfully!'
    this.buttonColor = 'dark'
    this.buttonText2 = 'Back'
    this.buttonColor2 = 'primary'
  }

}
