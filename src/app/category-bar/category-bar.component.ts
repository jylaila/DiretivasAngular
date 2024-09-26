import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-bar.component.html',
  styleUrl: './category-bar.component.css'
})
export class CategoryBarComponent {

 categories: Category[]=[
  {id: 1, title: 'Cursos de Ti', image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'},
  {id: 2, title: 'Category 2', image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'},
  {id: 3, title: 'Category 3', image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'},
  {id: 4, title: 'Category 4', image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'},
  {id: 5, title: 'Category 5', image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'},
  ]

}
