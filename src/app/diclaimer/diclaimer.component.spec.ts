import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiclaimerComponent } from './diclaimer.component';

describe('DiclaimerComponent', () => {
  let component: DiclaimerComponent;
  let fixture: ComponentFixture<DiclaimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiclaimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
