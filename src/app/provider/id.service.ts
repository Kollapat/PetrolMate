import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {
  
  private id: string
  constructor() { }

  saveId(username) {
    this.id = username
  }
  getId() {
    return this.id
  }
}
