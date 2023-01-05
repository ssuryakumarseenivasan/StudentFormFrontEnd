import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivepageComponent } from './activepage.component';

describe('ActivepageComponent', () => {
  let component: ActivepageComponent;
  let fixture: ComponentFixture<ActivepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
