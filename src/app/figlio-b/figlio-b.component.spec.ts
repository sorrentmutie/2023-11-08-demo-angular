import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiglioBComponent } from './figlio-b.component';

describe('FiglioBComponent', () => {
  let component: FiglioBComponent;
  let fixture: ComponentFixture<FiglioBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiglioBComponent]
    });
    fixture = TestBed.createComponent(FiglioBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
