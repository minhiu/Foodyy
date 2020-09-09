import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { faCalendar, faFlag, faThumbsUp, faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  calendar = faCalendar;
  flag = faFlag;
  likes = faThumbsUp;
  close = faWindowClose;

  blogsItem: any[];
  isAdding: boolean = false;
  editingItem: number;

  editItemForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      res => {
        this.blogsItem = res.blogList;
      }
    )
  }

  onEdit(id) {
    this.editingItem = id;
  }

  onSubmitEdit() {
    let editedItem = this.blogsItem.find( item => item.id === this.editingItem);
    editedItem.name = this.editItemForm.value.name;
    this.editingItem = -1;
    this.editItemForm.reset();
  }

  onAdd() {
    this.isAdding = true;
  }

  getAddedStatus(status: boolean) {
    this.isAdding = status;
  }

  addItem(item: Object) {
    this.blogsItem.unshift(item);
  }

  onDelete(id: number) {
    let itemToDelete = this.blogsItem.filter(item => item.id === id);
    let indexToDelete = this.blogsItem.indexOf(itemToDelete[0]);
    this.blogsItem.splice(indexToDelete, 1);
  }
}