import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComments } from './admin-comments';

describe('AdminComments', () => {
  let component: AdminComments;
  let fixture: ComponentFixture<AdminComments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
