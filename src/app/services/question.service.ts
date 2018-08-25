
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question, Category } from '../models';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private api = 'http://localhost:3000/questions';

  constructor(private http: HttpClient, private categoryService: CategoryService) { }

  getQuestions(): Observable<Question[]> {
    return forkJoin(
      this.http.get<Question[]>(this.api),
      this.categoryService.getCategories()
    ).pipe(
      map( ( combined, index) => {
        const questions: Question[] = combined[0];
        const categories: Category[] = combined[1];

        questions.forEach( q => {
          q.categories = [];
          q.categoryIds.forEach( id => {
            q.categories.push( categories.find( el => el.id === id) );
          });
        });

        return questions;
      })
    );
  }
}
