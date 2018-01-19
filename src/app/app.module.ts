import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {InputFormatDirective} from './input-format.directive';
import {ZippyComponent} from './zippy/zippy.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {NewCourseFormComponent} from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import {PostService} from './services/post.service';
import {AppErrorHandler} from './common/app-error-handler';

@NgModule({
  declarations: [
    SignupFormComponent,
    AppComponent,
    FavoriteComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
