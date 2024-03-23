import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {CommonModule} from "@angular/common";
import { PostComponent } from './components/post/post.component';
import {HttpClientModule} from "@angular/common/http";
import {MarkdownModule} from "ngx-markdown";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ProjectsComponent,
    PostComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
