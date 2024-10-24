import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Course } from '../models/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})

export class CourseComponent implements OnInit {
  //construtor da classe
  constructor(private activatedRoute: ActivatedRoute,  private router: Router  ) {}

  //implementação do método OnInit
  ngOnInit(): void {
    this.updateCourses()
  }

  updateCourses(){
    //recupera o parâmetro da rota e armazena na constante id
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    //filtra a lista de cursos de acordo com a categoria
    this.courses = this.courses.filter((x) => x.idCategory == id);
    //atualiza o conteúdo
    this.router.navigate(['/course', { id: id }]);
  }

  courses: Course[] = [
    {
      id: 1,
      idCategory: 1,
      title: 'Java para iniciantes',
      description:
        'Aprenda Java de forma fácil: váriaveis, constantes, funções, etc',
      cost: 100,
      image:
        'https://hermes.dio.me/articles/cover/d4c42a23-7115-48c5-ae7a-1f25370003e1.png',
      duration: '10 meses',
    },
    {
      id: 2,
      idCategory: 1,
      title: 'C# para iniciantes',
      description:
        'Aprenda C# de forma fácil: váriaveis, constantes, funções, etc',
      cost: 100,
      image:
        'https://hermes.dio.me/articles/cover/d4c42a23-7115-48c5-ae7a-1f25370003e1.png',
      duration: '10 meses',
    },
    {
      id: 3,
      idCategory: 1,
      title: 'Python para iniciantes',
      description:
        'Aprenda Python de forma fácil: váriaveis, constantes, funções, etc',
      cost: 100,
      image:
        'https://hermes.dio.me/articles/cover/d4c42a23-7115-48c5-ae7a-1f25370003e1.png',
      duration: '10 meses',
    },
    {
      id: 4,
      idCategory: 1,
      title: 'JavaScript para iniciantes',
      description:
        'Aprenda JavaScript de forma fácil: váriaveis, constantes, funções, etc',
      cost: 100,
      image:
        'https://hermes.dio.me/articles/cover/d4c42a23-7115-48c5-ae7a-1f25370003e1.png',
      duration: '10 meses',
    },
    {
      id: 5,
      idCategory: 1,
      title: 'SQL para iniciantes',
      description:
        'Aprenda SQL de forma fácil: ddl, dml, procedures, funções, etc',
      cost: 100,
      image:
        'https://hermes.dio.me/articles/cover/d4c42a23-7115-48c5-ae7a-1f25370003e1.png',
      duration: '10 meses',
    },
    {
      id: 6,
      idCategory: 2,
      title: 'Inteligência Emocional',
      description:
        'Aprenda agir de forma racional diante das diversidades. Dicas de especialistas etc',
      cost: 320.0,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_FDWsFa_HLgROHtgtTZJrbPktbyc1flUiw&s',
      duration: '36 horas',
    },
    {
      id: 7,
      idCategory: 2,
      title: 'Inteligência Emocional',
      description:
        'Aprenda agir de forma racional diante das diversidades. Dicas de especialistas etc',
      cost: 320.0,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_FDWsFa_HLgROHtgtTZJrbPktbyc1flUiw&s',
      duration: '36 horas',
    },
    {
      id: 8,
      idCategory: 2,
      title: 'Inteligência Emocional',
      description:
        'Aprenda agir de forma racional diante das diversidades. Dicas de especialistas etc',
      cost: 320.0,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_FDWsFa_HLgROHtgtTZJrbPktbyc1flUiw&s',
      duration: '36 horas',
    },
    {
      id: 9,
      idCategory: 2,
      title: 'Inteligência Emocional',
      description:
        'Aprenda agir de forma racional diante das diversidades. Dicas de especialistas etc',
      cost: 320.0,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_FDWsFa_HLgROHtgtTZJrbPktbyc1flUiw&s',
      duration: '36 horas',
    },
  ];
}
