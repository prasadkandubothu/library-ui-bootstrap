import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  isLoaderDisplay : boolean = false;

  loaderStart(){
    this.isLoaderDisplay = true;
  }

  loaderEnd(){
    this.isLoaderDisplay = false;
  }

  
}
