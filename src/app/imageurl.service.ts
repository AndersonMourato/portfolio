import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageurlService {
  urlBase:String = "";
  constructor() {
    this.urlBase = document.location.origin;
   }

  getUrlImage(image:string):string{
    console.log(this.urlBase)
    return this.urlBase+"/assets/img/"+image;
  }
}
