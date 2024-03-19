import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  src:string = "../../../assets/img/";
  
  @Input()
  image: string = `${this.src}captura-de-tela 2024-03-10-235626.png`;
  @Input()
  title: string = "no title";
  @Input()
  date: string = "no date";
  @Input()
  description: string = "no description";
  @Input()
  tags: string = "no tags";
  @Input()
  link: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
