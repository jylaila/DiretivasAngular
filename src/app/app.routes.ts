import { Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CourseDescriptionComponent } from './course-description/course-description.component';

export const routes: Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'course-description', component: CourseDescriptionComponent },
  //defino uma nova rota para cursos, onde id é o identificador do parâmetro que
  //será enviado pela url
  { path: 'course/:id', component: CourseComponent },
];

