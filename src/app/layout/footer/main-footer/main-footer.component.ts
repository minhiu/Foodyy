import { Component, OnInit } from '@angular/core';

import { faPhone, faEnvelope, faMapMarkerAlt, faFax, faIdBadge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  phone = faPhone;
  mail = faEnvelope;
  map = faMapMarkerAlt;
  fax = faFax;
  id = faIdBadge;
}
