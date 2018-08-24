import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private api = 'http://localhost:3000/tagList';

  constructor(private http: HttpClient) { }

  getTags() {
    return this.http.get(this.api);
  }
}
