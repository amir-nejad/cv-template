import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/enums/grade';
import { Education } from '../../interfaces/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  educations: Education[] = [
    {
      id: 1,
      title: "Computer Science",
      grade: Grade.Bachelors,
      gpa: 3,
      startDate: new Date(2018, 5),
      endDate: new Date(2022, 5),
      location: "USA",
      university: "University of Michigan"
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      grade: Grade.Masters,
      gpa: 3,
      startDate: new Date(2022, 9),
      location: "USA",
      university: "University of Michigan"
    }
  ]

  ngOnInit(): void {
  }

}
