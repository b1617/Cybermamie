import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArticleComponent } from './info-article.component';

describe('InfoArticleComponent', () => {
  let component: InfoArticleComponent;
  let fixture: ComponentFixture<InfoArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
