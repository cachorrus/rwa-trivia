import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent, TagComponent, QuestionComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full'},
  { path: 'categories', component: CategoryComponent},
  { path: 'tags', component: TagComponent},
  { path: 'questions', component: QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
