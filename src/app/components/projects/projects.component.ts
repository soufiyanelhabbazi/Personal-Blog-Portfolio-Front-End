import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ProjectService} from "../../services/project.service";
import {Project} from "../../models/project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects !: Observable<Array<Project>>;
  constructor(private projectService:ProjectService){}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projects = this.projectService.getProjects();
  }
}
