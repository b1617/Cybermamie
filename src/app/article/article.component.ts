import {Component, OnInit} from '@angular/core';
import {RecetteService} from '../services/recette.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  recettes: any = [];

  constructor(private recetteService: RecetteService) {
  }

  getRecettes(): void {
    this.recettes = this.recetteService.list();
    console.log(this.recettes);
  }

  ngOnInit() {
    this.getRecettes();
  }

}
