import { listBlogData } from './../../../core/service/data-fake/list-blog-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-content',
  templateUrl: './control-content.component.html',
  styleUrls: ['./control-content.component.scss']
})
export class ControlContentComponent implements OnInit {

  listBlog = listBlogData;
  searchValue: string;
  searchedNames: any[];

  constructor() { }

  ngOnInit(): void {
  }

  onSearchValueChange(name) {
    if (name === '') {
      this.searchedNames = [];
    } else {
      this.searchedNames = this.listBlog.filter( item => item.name.toLowerCase().trim().includes(name.toLowerCase().trim()));
    }
  }
}
