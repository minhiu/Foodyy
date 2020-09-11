import { listBlogData } from './../../core/service/data-fake/list-blog-data';
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
  listBlog = listBlogData;

  constructor() { }

  ngOnInit(): void {
  }
}
