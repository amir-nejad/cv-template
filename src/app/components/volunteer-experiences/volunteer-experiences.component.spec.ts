import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerExperiencesComponent } from './volunteer-experiences.component';

describe('VolunteerExperiencesComponent', () => {
  let component: VolunteerExperiencesComponent;
  let fixture: ComponentFixture<VolunteerExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
