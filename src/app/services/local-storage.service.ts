import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  store(key : string, info : string){
    localStorage.setItem(key, info);
  }
  retrieve(key : string){
    return localStorage.getItem(key);
  }
  /*
  update(){

  }
  delete(){

  }
  */
}
