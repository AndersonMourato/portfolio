import { Component, Input, OnInit } from '@angular/core';
import { ImageurlService } from 'src/app/imageurl.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  image: string = "";
  @Input()
  title: string = "No title";
  @Input()
  date: string = "no date";
  @Input()
  description: string = "no description";
  @Input() 
  subDescription: string = "";
  @Input()
  tags: string[] | any = [];
  @Input()
  linkProject: string = "#";
  @Input()
  linkGit: string = "#";


  constructor( 
    private serviceImage: ImageurlService
  ){
    console.log(" construct --->" + this.image)
  }
  
  ngOnInit(): void {
    let noImage = this.serviceImage.getUrlImage("no-image.jpg");
    let image = this.serviceImage.getUrlImage(this.image);
    this.image? this.image = image: this.image = noImage;
    this.tags? this.tags = this.tags.split(","): this.tags = [""];
  
    console.log(" apos init --->" + this.image)
  
  }

}

