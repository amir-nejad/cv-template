import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faYoutube, faGithub, faDribbble, faPinterest } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent implements OnInit {
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYouTube = faYoutube;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faDribble = faDribbble;
  faPinterest = faPinterest;
  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
