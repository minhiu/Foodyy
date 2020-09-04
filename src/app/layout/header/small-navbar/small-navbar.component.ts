import { Component, OnInit } from '@angular/core';
import { faSearch, faPhone, faEnvelope, faMapMarkerAlt, faFax, faIdBadge, faKey, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-small-navbar',
  templateUrl: './small-navbar.component.html',
  styleUrls: ['./small-navbar.component.scss']
})
export class SmallNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search = faSearch;
  phone = faPhone;
  mail = faEnvelope;
  map = faMapMarkerAlt;
  fax = faFax;
  id = faIdBadge;
  login = faKey;
  register = faLock;
}
