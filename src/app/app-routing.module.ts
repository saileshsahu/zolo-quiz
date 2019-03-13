import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizTestComponent } from './quiz-test/quiz-test.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz-test', component: QuizTestComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
