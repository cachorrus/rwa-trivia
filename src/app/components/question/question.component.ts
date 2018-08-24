import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services';
import { Observable } from 'rxjs';
import { Question } from '../../models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: Observable<Question[]>;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.question = this.questionService.getQuestions();
  }

}
