import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSelected } from './site-selected';

describe('SiteSelected', () => {
  let component: SiteSelected;
  let fixture: ComponentFixture<SiteSelected>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteSelected]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteSelected);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
