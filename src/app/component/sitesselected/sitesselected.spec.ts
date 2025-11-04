import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sitesselected } from './sitesselected';

describe('Sitesselected', () => {
  let component: Sitesselected;
  let fixture: ComponentFixture<Sitesselected>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sitesselected]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sitesselected);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
