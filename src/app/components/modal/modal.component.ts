import { Component, Input, OnInit } from '@angular/core';

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


  constructor(){}
  
  ngOnInit(): void {
    this.image? this.image = this.image: this.image = "../../assets/img/no-image.jpg";
    this.tags? this.tags = this.tags.split(","): this.tags = [""];
  }



}

