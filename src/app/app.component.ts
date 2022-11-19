import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, HostBinding} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  faListUl,
  faCode,
  faBriefcase,
  faGraduationCap,
  faHandshakeAngle,
  faCertificate,
  faBorderNone
 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Responsive CV Template';

  // Menu Icons
  faListUl = faListUl;
  faCode = faCode;
  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;
  faHandshakeAngle = faHandshakeAngle;
  faCertificate = faCertificate;
  faBorderNone = faBorderNone;

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  isHandsetScreen: boolean = false;

  constructor(private responsive: BreakpointObserver){

  }

  ngOnInit(): void {
    // Dark Mode
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
    });

    // Responsive
    this.responsive.observe(Breakpoints.Handset).subscribe(result => {
      this.isHandsetScreen = false;

      if(result.matches){
        this.isHandsetScreen = true;
      }
    });
  }
}
