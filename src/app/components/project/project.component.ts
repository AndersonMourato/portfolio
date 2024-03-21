import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
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
  linkGit: string = "#"

  constructor(){}
  
  ngOnInit(): void {
    this.image? this.image = this.image: this.image = "../../assets/img/no-image-available-icon-vector.jpg";
    this.tags? this.tags = this.tags.split(","): this.tags = [""];
  }

}
