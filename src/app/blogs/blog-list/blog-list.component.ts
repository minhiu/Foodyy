import { ListBlog } from '../list-blog.model';
import { Component, OnInit } from '@angular/core';
import { faCalendar, faFlag, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  item = ListBlog;
  calendar = faCalendar;
  flag = faFlag;
  likes = faThumbsUp;
}