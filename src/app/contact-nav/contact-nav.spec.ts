import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNav } from './contact-nav';

describe('ContactNav', () => {
  let component: ContactNav;
  let fixture: ComponentFixture<ContactNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
