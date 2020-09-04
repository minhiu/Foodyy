import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ListBlog } from '../item.model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  
  id: number;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.id);
   }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    console.log(this.id);
  }

  item = ListBlog[this.id];
}
