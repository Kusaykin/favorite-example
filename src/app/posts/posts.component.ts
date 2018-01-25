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
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  constructor(private  service: PostService) {

  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value, id: ''};
    this.posts.splice(0, 0, post); // optimistic style, first create (add in array) then check
    input.value = '';
    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          console.log(newPost);
          console.log(this.posts);
        },
        (error: AppError) => {
          this.posts.splice(0, 1); // optimistic style, if error then rollback (remove from array)

          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError); // "form" is example
          } else throw error;
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1); // optimistic style, first delete then check

    this.service.delete(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            this.posts.splice(index, 0, post); // optimistic style, if error then rollback
            throw error;
          }
        }
      );
  }
}


