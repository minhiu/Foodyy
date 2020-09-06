import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListBlog } from '../list-blog.model';
import { faCalendar, faFlag, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  
  id: number;
  list: any;
  calendar = faCalendar;
  flag = faFlag;
  likes = faThumbsUp;
  paramsSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.list = ListBlog.find(list => list.id === this.id);
    
    this.paramsSubscription = this.activatedRoute.params.subscribe( 
      (params: Params) => {
        this.id = parseInt(params['id']);
        this.list = ListBlog.find(list => list.id === this.id);
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
