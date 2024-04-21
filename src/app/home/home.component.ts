import { Component, OnInit } from '@angular/core';
import { ImageurlService } from '../imageurl.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photo: string = "";
  constructor( private serviceImage: ImageurlService ) { }

  ngOnInit(): void {
    this.photo = this.serviceImage.getUrlImage("foto.png");
  }

}
