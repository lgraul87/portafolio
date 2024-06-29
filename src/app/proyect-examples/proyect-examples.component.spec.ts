import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectExamplesComponent } from './proyect-examples.component';

describe('ProyectExamplesComponent', () => {
  let component: ProyectExamplesComponent;
  let fixture: ComponentFixture<ProyectExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
