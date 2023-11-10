import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiglioAComponent } from './figlio-a.component';

describe('FiglioAComponent', () => {
  let component: FiglioAComponent;
  let fixture: ComponentFixture<FiglioAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiglioAComponent]
    });
    fixture = TestBed.createComponent(FiglioAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
