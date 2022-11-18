import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
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
  styleUrls: ['./app.component.less']
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

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
