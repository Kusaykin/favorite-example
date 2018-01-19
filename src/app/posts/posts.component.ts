import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts;

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response;
          console.log(response);
          console.log(typeof(this.posts));
        });
  }

  constructor(private  service: PostService) {

  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value, id: ''};
    input.value = '';
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.id;
          this.posts.splice(0, 0, post);
          console.log(response);
          console.log(this.posts);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          } else throw error;
        });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response);
        });
  }

  deletePost(post) {
    this.service.deletePost(345)
      .subscribe(
        response => {
          const index = this.posts.indexOf(post);
          console.log(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else  throw error;
        });
  }

}


