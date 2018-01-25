import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {DataService} from './data.service';

@Injectable()
export class PostService extends DataService {

  // private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(httpClient: HttpClient) {
    super('http://jsonplaceholder.typicode.com/posts', httpClient);
  }

}

// interface PostInterface {
//   id: string;
//   title: string;
// }
