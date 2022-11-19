import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, HostBinding} from '@angular/core';
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
  title = 'CV Template';

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

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
