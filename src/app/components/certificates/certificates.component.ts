import { Component, OnInit } from '@angular/core';
import { Certificate } from '../../interfaces/certificate';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.less']
})
export class CertificatesComponent implements OnInit {

  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  constructor() {
    this.certificates.sort((a, b) => {
      if (a.issueDate > b.issueDate) {
        return -1;
      } else if (a.issueDate === b.issueDate) {

        return 0;
      } else {
        return 1;
      }
    })
  }

  certificates: Certificate[] = [
    {
      id: 1,
      certificateName: "Certificate 1",
      issuingOrganization: "Microsoft",
      issueDate: new Date(2020, 2),
      expireDate: new Date(2025, 6),
      credentialId: "MS3829424",
      credentialUrl: new URL("https://microsoft.com"),
    },
    {
      id: 2,
      certificateName: "Certificate 2",
      issuingOrganization: "Google",
      issueDate: new Date(2022, 2),
      expireDate: new Date(2025, 4),
      credentialId: "G3829424JWOEIG-GE",
      credentialUrl: new URL("https://microsoft.com"),
    },
    {
      id: 3,
      certificateName: "Certificate 3",
      issuingOrganization: "CompTIA",
      issueDate: new Date(2022, 2),
      credentialId: "G2OIEFEW32",
      credentialUrl: new URL("https://microsoft.com"),
    },
  ]

  ngOnInit(): void {
  }

}
