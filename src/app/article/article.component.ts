import {Component, OnInit} from '@angular/core';
import {RecetteService} from '../services/recette.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: []
})
export class ArticleComponent implements OnInit {

  recettes: any = [];
  allRecettes: any = [];
  message = '';
  value = -1;
  maxLength;
  loading = false;

  constructor(private recetteService: RecetteService) {
  }


  // listen() {
  //   this.loading = true;
  //   this.service
  //     .listen()
  //     .pipe(resultList)
  //     .subscribe((list: any) => {
  //       this.message = list.item(0).item(0).transcript;
  //       console.log('RxComponent:onresult', this.message, list);
  //       if (this.message == 'gauche') {
  //         if (this.value > -1) {
  //           this.moveRecettes(--this.value);
  //         }
  //       } else if (this.message == 'droite') {
  //         if (this.value < this.maxLength) {
  //           this.moveRecettes(++this.value);
  //         }
  //       } else if (this.message == 'tout') {
  //         this.recettes = this.allRecettes;
  //       } else {
  //         this.filterRecettes(this.message);
  //       }
  //       this.loading = false;
  //     });
  // }


  getRecettes(): void {
    this.recettes = this.recetteService.list();
    this.allRecettes = this.recettes;
    this.maxLength = this.allRecettes.length;
    console.log(this.recettes);
  }

  moveRecettes(n: number) {
    this.recettes = [this.allRecettes[n]];
  }

  filterRecettes(text) {
    console.log(text);
    if (text.length > 0) {
      this.recettes = this.allRecettes.filter(recette => recette.name.toLowerCase().indexOf(text) > -1);
    }
  }

  ngOnInit() {
    this.getRecettes();
    this.recetteService.currentMessage.subscribe(message => {
      if (message.length > 0) {
        this.filterRecettes(message);
      } else {
        this.recettes = this.allRecettes;
      }
    });

    this.recetteService.currentArticle.subscribe((n: any) => {
      console.log('get n ', n);
      if (n > -1 && n < this.allRecettes.length) {
        this.moveRecettes(n);
      } else {
        this.recettes = this.allRecettes;
      }
    });

    this.recetteService.activateMicro.subscribe((activate) => {
      if (activate) {
        //   this.listen();
      }
    });
  }
}
