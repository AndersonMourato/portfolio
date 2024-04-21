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
    // PATH LOCALHOST
    //return this.urlBase+"/assets/img/"+image;
    // PATH BUILD gitHub
    return this.urlBase+"portfolio/assets/img/"+image;
  }
}
