import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/interfaces/work-experience';

@Component({
  selector: 'app-volunteer-experiences',
  templateUrl: './volunteer-experiences.component.html',
  styleUrls: ['./volunteer-experiences.component.less']
})
export class VolunteerExperiencesComponent implements OnInit {
  constructor() {
    this.volunteerExperiences.sort((a, b) => {
      if (a.startDateTime > b.startDateTime) {
        return -1;
      } else if (a.startDateTime === b.startDateTime) {
        return 0;
      } else {
        return 1;
      }
    })
  }

  // An array of WorkExperiences
  volunteerExperiences: WorkExperience[] = [
    {
      id: 1,
      title: "Volunteer Experience 1",
      description: "<p> Simple Description <p>",
      company: "Organization 1",
      startDateTime: new Date(2019, 2),
      endDateTime: new Date(2020, 3),
    },
    {
      id: 2,
      title: "Volunteer Experience 2",
      description: "<p> Simple Description <p>",
      company: "Organization 2",
      startDateTime: new Date(2020, 5),
      endDateTime: new Date(2021, 3),
    }
  ]
  ngOnInit(): void {
  }

}
