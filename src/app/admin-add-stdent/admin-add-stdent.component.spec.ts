import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddStdentComponent } from './admin-add-stdent.component';

describe('AdminAddStdentComponent', () => {
  let component: AdminAddStdentComponent;
  let fixture: ComponentFixture<AdminAddStdentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddStdentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddStdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
