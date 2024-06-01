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
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MarkdownModule} from "ngx-markdown";
import { NgIconsModule } from '@ng-icons/core';
import { heroSunSolid, heroMoonSolid, heroSquares2x2Solid, heroXMarkSolid, heroEnvelopeSolid } from '@ng-icons/heroicons/solid';
import { heroEnvelope, heroChevronRight, heroChevronLeft, heroBriefcase } from '@ng-icons/heroicons/outline';
import {simpleLinkedin, simpleGithub, simpleX, simpleSpotify, simpleLeetcode} from '@ng-icons/simple-icons';
import { BlogPostSkeletonComponent } from './components/skeleton-loading/blog-post-skeleton/blog-post-skeleton.component';
import { HomePostSkeletonComponent } from './components/skeleton-loading/home-post-skeleton/home-post-skeleton.component';

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
    NotFoundComponent,
    BlogPostSkeletonComponent,
    HomePostSkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    CommonModule,
    NgIconsModule.withIcons({heroSunSolid, heroMoonSolid, heroEnvelopeSolid,
      heroSquares2x2Solid, heroXMarkSolid, heroEnvelope, heroChevronRight, heroChevronLeft, heroBriefcase,
      simpleLinkedin, simpleGithub, simpleX, simpleSpotify, simpleLeetcode}),
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
