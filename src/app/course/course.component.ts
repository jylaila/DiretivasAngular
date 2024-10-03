import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  courses: Course[]=[
    {id: 1, idCategory: 1, title: 'Java para iniciantes',description: 'Aprenda Java de forma fácil: váriaveis, constantes, funções, etc', cost: 100,
      image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg', duration: '10 meses'},
    {id: 2, idCategory: 1, title: 'C# para iniciantes',description: 'Aprenda C# de forma fácil: váriaveis, constantes, funções, etc', cost: 100,
      image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg', duration: '10 meses'},
    {id: 3, idCategory: 1, title: 'Python para iniciantes',description: 'Aprenda Python de forma fácil: váriaveis, constantes, funções, etc', cost: 100,
      image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg', duration: '10 meses'},
    {id: 4, idCategory: 1, title: 'JavaScript para iniciantes',description: 'Aprenda JavaScript de forma fácil: váriaveis, constantes, funções, etc', cost: 100,
      image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg', duration: '10 meses'},
    {id: 5, idCategory: 1, title: 'SQL para iniciantes',description: 'Aprenda SQL de forma fácil: ddl, dml, procedures, funções, etc', cost: 100,
      image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg', duration: '10 meses'},
    {id: 6, idCategory: 2, title: 'Inteligência Emocional',description: 'Aprenda agir de forma racional diante das diversidades. Dicas de especialistas etc', cost: 320.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_FDWsFa_HLgROHtgtTZJrbPktbyc1flUiw&s', duration: '36 horas'},
    {id: 7, idCategory: 2, title: 'Inteligência Emocional',description: 'Aprenda agir de forma racional diante das diversidades. Dicas de especialistas etc', cost: 320.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_FDWsFa_HLgROHtgtTZJrbPktbyc1flUiw&s', duration: '36 horas'},
    {id: 8, idCategory: 2, title: 'Inteligência Emocional',description: 'Aprenda agir de forma racional diante das diversidades. Dicas de especialistas etc', cost: 320.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_FDWsFa_HLgROHtgtTZJrbPktbyc1flUiw&s', duration: '36 horas'},
    {id: 9, idCategory: 2, title: 'Inteligência Emocional',description: 'Aprenda agir de forma racional diante das diversidades. Dicas de especialistas etc', cost: 320.00,
       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_FDWsFa_HLgROHtgtTZJrbPktbyc1flUiw&s', duration: '36 horas'},
  ]
}
