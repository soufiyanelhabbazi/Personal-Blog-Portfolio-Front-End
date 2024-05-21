import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../models/project.model";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) {}

  public getProjects():Observable<Array<Project>> {
    return this.http.get<Array<Project>>(environment.backend+"/projects");
  }
  public getProject(projectID:string):Observable<Project> {
    return this.http.get<Project>(environment.backend+"/projects/"+projectID);
  }
  public saveProject(project: Project):Observable<Project> {
    return this.http.post<Project>(environment.backend+"/projects", project);
  }
  public updateProject(project: Project):Observable<Project> {
    return this.http.put<Project>(environment.backend+"/projects", project);
  }
  public deleteProject(projectID:string) {
    return this.http.delete<Project>(environment.backend+"/projects/"+projectID);
  }
}
