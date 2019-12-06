import {Component, HostListener} from '@angular/core';
import {RecetteService} from './services/recette.service';


export enum KEY {
  SPACE = 32,
  LEFT_ARROW = 37,
  RIGHT_ARROW = 39,
  TOP_ARROW = 38,
  BOTTOM_ARROW = 40,
  ECHAP = 27,
  CTRL = 17
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'cybermamie';
  value = -1;
  maxLength = null;

  constructor(private recetteService: RecetteService) {
    this.maxLength = this.recetteService.getLength();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(e: KeyboardEvent) {
    let element = document.getElementById('searchbar');
    if (e.keyCode == KEY.CTRL) {
      element.focus();
    } else if (e.keyCode == KEY.LEFT_ARROW) {
      if (this.value > -1) {
        this.recetteService.changeArticle(--this.value);
      }
    } else if (e.keyCode == KEY.RIGHT_ARROW) {
      if (this.value < this.maxLength) {
        this.recetteService.changeArticle(++this.value);
      }
    } else if (e.keyCode == KEY.ECHAP) {
      element.blur();
    } else if (e.keyCode == KEY.SPACE) {
      this.recetteService.activeMicro(true);
    } else if (e.keyCode == KEY.BOTTOM_ARROW) {
      console.log('down');
      window.scrollTo(document.body.scrollLeft,
        document.body.scrollTop - 500);
    }
  }


}
