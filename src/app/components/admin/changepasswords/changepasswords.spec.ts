import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Changepasswords } from './changepasswords';

describe('Changepasswords', () => {
  let component: Changepasswords;
  let fixture: ComponentFixture<Changepasswords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Changepasswords]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Changepasswords);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
