import { Component, OnInit } from '@angular/core';
import { Project, projects } from '../data';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor() { 
    this.projects = projects;
  }
  
  ngOnInit(): void {
    //console.log(this.projects[0].tags);
  }

 

}
