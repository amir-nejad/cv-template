import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkExperience } from 'src/app/interfaces/work-experience';
import { AppComponent } from '../../app.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.scss']
})
export class WorkExperiencesComponent implements OnInit {
  // An array of WorkExperiences
  workExperiences: WorkExperience[] = [
    {
      id: 1,
      title: "Work Experience 1",
      description: "<p> Simple Description <p>",
      company: "Company 1",
      startDateTime: new Date(2019, 2),
      endDateTime: new Date(2020, 3),
    },
    {
      id: 2,
      title: "Work Experience 2",
      description: "<p> Simple Description <p>",
      company: "Company 2",
      startDateTime: new Date(2020, 5),
      endDateTime: new Date(2021, 3),
    },
    {
      id: 3,
      title: "Work Experience 3",
      description: "<p> Simple Description <p>",
      company: "Company 3",
      startDateTime: new Date(2021, 5),
    },
  ]
  isHandsetScreen: boolean = false;

  constructor(private responsive: BreakpointObserver) {
    this.workExperiences.sort((a, b) => {
      if (a.startDateTime > b.startDateTime) {
        return -1;
      } else if (a.startDateTime === b.startDateTime) {
        return 0;
      } else {
        return 1;
      }
    })
  }

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.Handset).subscribe(result => {
      this.isHandsetScreen = false;

      if(result.matches){
        this.isHandsetScreen = true;
      }
    });
  }

}

