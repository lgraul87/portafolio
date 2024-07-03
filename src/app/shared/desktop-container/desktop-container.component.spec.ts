import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopContainerComponent } from './desktop-container.component';

describe('DesktopContainerComponent', () => {
  let component: DesktopContainerComponent;
  let fixture: ComponentFixture<DesktopContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
