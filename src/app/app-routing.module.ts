import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {BlogComponent} from "./components/blog/blog.component";
import {PostComponent} from "./components/post/post.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ResumeComponent} from "./components/resume/resume.component";
import { ResumeLayoutComponent } from './layouts/resume-layout/resume-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ResumeProjectsComponent } from './components/resume-projects/resume-projects.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path :"home", component : HomeComponent},
      {
        path:"" ,
        redirectTo : "/home",
        pathMatch: "full"
      },
      { path :"about", component : AboutComponent},
      { path :"projects", component : ProjectsComponent},
      { path :"blog", component : BlogComponent},
      { path :"blog/posts/:id", component : PostComponent}
    ]
  },
  
  {
    path: 'resume',
    component: ResumeLayoutComponent,
    children: [
      { path :'', component : ResumeComponent },
      { path:'projects', component: ResumeProjectsComponent }
    ]
  },
  
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
