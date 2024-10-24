import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent {

 categories: Category[]=[
  {id: 1, title: 'Cursos de Ti', image: 'https://cursa.app/img/catimgs/informatica-ti.webp'},
  {id: 2, title: 'Psicologia', image: 'https://cursa.app/img/catimgs/informatica-ti.webp'},
  {id: 3, title: 'Category 3', image: 'https://cursa.app/img/catimgs/informatica-ti.webp'},
  {id: 4, title: 'Category 4', image: 'https://cursa.app/img/catimgs/informatica-ti.webp'},
  {id: 5, title: 'Category 5', image: 'https://cursa.app/img/catimgs/informatica-ti.webp'},
  ]
}
