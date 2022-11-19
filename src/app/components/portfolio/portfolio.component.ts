import { Component, OnInit } from '@angular/core';
import { Tile } from '../../interfaces/tile';
import { Project } from '../../interfaces/project';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  tiles: Tile[] = [
    {
      cols: 3,
      rows: 1,
      project: {
        id: 1,
        projectName: "Project 1",
        projectDescription: "<p> Porject Description </p>",
        projectStartDate: new Date(2014, 7),
        projectEndDate: new Date(2014, 11),
        projectUrl: new URL("https://example.com"),
        projectImage: "/assets/images/project.jpg",
      },
    },
    {
      cols: 1,
      rows: 2,
      project: {
        id: 2,
        projectName: "Project 2",
        projectDescription: "<p> Porject Description </p>",
        projectStartDate: new Date(2014, 7),
        projectUrl: new URL("https://example.com"),
        projectImage: "/assets/images/project.jpg",
      },
    },
    {
      cols: 1,
      rows: 1,
      project: {
        id: 3,
        projectName: "Project 3",
        projectDescription: "<p> Porject Description </p>",
        projectStartDate: new Date(2014, 7),
        projectEndDate: new Date(2014, 11),
        projectUrl: new URL("https://example.com"),
        projectImage: "/assets/images/project.jpg",
      },
    },
    {
      cols: 2,
      rows: 1,
      project: {
        id: 4,
        projectName: "Project 4",
        projectDescription: "<p> Porject Description </p>",
        projectStartDate: new Date(2016, 7),
        projectEndDate: new Date(2016, 10),
        projectUrl: new URL("https://example.com"),
        projectImage: "/assets/images/project.jpg",
      },
    },
  ];

  isHandsetScreen: boolean = false;

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.Handset).subscribe(result => {
      this.isHandsetScreen = false;

      if(result.matches){
        this.isHandsetScreen = true;
      }
    });
  }

}

