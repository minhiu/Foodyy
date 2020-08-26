import { Component } from '@angular/core';
import { faCalendarAlt, faFlag, faThumbsUp, faSearch, faArrowCircleLeft, faArrowCircleRight, faPhone, faEnvelope, faMapMarkerAlt, faFax, faIdBadge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navbarCollapsed: Boolean = true;
 
  onToggleNavbarCollapsed(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  title = 'Foodyy';
  calendar = faCalendarAlt;
  flag = faFlag;
  likes = faThumbsUp;
  search = faSearch;
  left = faArrowCircleLeft;
  right = faArrowCircleRight;
  phone = faPhone;
  mail = faEnvelope;
  map = faMapMarkerAlt;
  fax = faFax;
  id = faIdBadge;
}
