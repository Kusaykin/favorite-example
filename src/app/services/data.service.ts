import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private url: string, private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get(this.url)
       .catch(this.handleError);
  }

  create(resource): Observable<any> {
    // return Observable.throw(new AppError()); // test error
    return this.httpClient.post(this.url, resource)
      .catch(this.handleError);
  }

  update(resource): Observable<any> {
    return this.httpClient.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .catch(this.handleError);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));

  }
}

interface PostInterface {
  id: string;
  title: string;
}
