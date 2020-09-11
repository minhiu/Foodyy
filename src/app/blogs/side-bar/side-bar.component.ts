import { Component, OnInit } from '@angular/core';
import { faCalendar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  calendar = faCalendar;
  likes = faThumbsUp;

  constructor() { }

  ngOnInit(): void {
  }
}
