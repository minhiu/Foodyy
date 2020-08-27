import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { faCalendarAlt, faFlag, faThumbsUp, faSearch, faArrowCircleLeft, faArrowCircleRight, faPhone, faEnvelope, faMapMarkerAlt, faFax, faIdBadge, faKey, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height:'0',
        overflow:'hidden',
        opacity:'0'
      })),
      state('final', style({
        overflow:'hidden',
        opacity:'1'
      })),
      transition('initial=>final', animate('750ms')),
      transition('final=>initial', animate('750ms'))
    ]),
  ]
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
  login = faKey;
  register = faLock;
}
