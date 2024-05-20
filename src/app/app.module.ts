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
import {CommonModule, NgOptimizedImage} from "@angular/common";
import { PostComponent } from './components/post/post.component';
import {HttpClientModule} from "@angular/common/http";
import {MarkdownModule} from "ngx-markdown";
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroSunSolid, heroMoonSolid, heroSquares2x2Solid, heroXMarkSolid, heroEnvelopeSolid } from '@ng-icons/heroicons/solid';
import { heroEnvelope, heroChevronRight, heroBriefcase } from '@ng-icons/heroicons/outline';
import {simpleLinkedin, simpleGithub, simpleX, simpleSpotify, simpleLeetcode} from '@ng-icons/simple-icons';
import {LoadingComponent} from "./loading-page/loading.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ProjectsComponent,
    PostComponent,
    AdminComponent,
    NotFoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    CommonModule,
    NgIconsModule.withIcons({heroSunSolid, heroMoonSolid, heroEnvelopeSolid,
      heroSquares2x2Solid, heroXMarkSolid, heroEnvelope, heroChevronRight, heroBriefcase,
      simpleLinkedin, simpleGithub, simpleX, simpleSpotify, simpleLeetcode}),
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
