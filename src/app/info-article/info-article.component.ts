import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-info-article',
  templateUrl: './info-article.component.html',
  styleUrls: ['./info-article.component.css']
})
export class InfoArticleComponent implements OnInit {

 @Input() infoRecette: any;
  constructor() { }

  ngOnInit() {
  }

}
