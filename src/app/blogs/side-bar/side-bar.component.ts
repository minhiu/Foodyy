import { Component, OnInit } from '@angular/core';
import { faCalendar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { ListBlog } from '../list-blog.model';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  calendar = faCalendar;
  likes = faThumbsUp;
  listBlog = ListBlog;

  constructor() { }

  ngOnInit(): void {
  }
}
