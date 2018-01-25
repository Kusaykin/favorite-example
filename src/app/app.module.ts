import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {InputFormatDirective} from './input-format.directive';
import {ZippyComponent} from './zippy/zippy.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {NewCourseFormComponent} from './new-course-form/new-course-form.component';
import {PostsComponent} from './posts/posts.component';
import {PostService} from './services/post.service';
import {AppErrorHandler} from './common/app-error-handler';
import {NavbarComponent} from './navbar/navbar.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {GithubProfileComponent} from './github-profile/github-profile.component';
import {HomeComponent} from './home/home.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import {GithubFollowersService} from './services/github-followers.service';

@NgModule({
  declarations: [
    SignupFormComponent,
    AppComponent,
    FavoriteComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    NavbarComponent,
    NotFoundComponent,
    GithubProfileComponent,
    HomeComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers/:id/:username',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    PostService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
