import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSelectPageComponent } from './admin-select-page.component';

describe('AdminSelectPageComponent', () => {
  let component: AdminSelectPageComponent;
  let fixture: ComponentFixture<AdminSelectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSelectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
