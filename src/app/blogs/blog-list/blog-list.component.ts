import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { faCalendar, faFlag, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  calendar = faCalendar;
  flag = faFlag;
  likes = faThumbsUp;

  blogsItem: any[];
  isDialogOpen: boolean = false;
  isAdding: boolean;
  isEditing: boolean;
  editingItem: any;

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

  // onSubmitEdit(itemName: string) {
  //   let editedItem = this.blogsItem.find( item => item.id === this.editingItem);
  //   editedItem.name = itemName;
  //   this.editingItem = -1;
  // }

  // Emitted status boolean from child
  getIsDialogOpenStatus(status: boolean) {
    this.isDialogOpen = status;
  }

  onEdit(id: number) {
    this.isAdding = false;
    this.editingItem = this.blogsItem.find( item => item.id === id);
    this.isDialogOpen = true;
  }

  onAdd() {
    this.isAdding = true;
    this.isDialogOpen = true;
  }

  // Emitted item from child
  addEditItem(item: any) {
    if (this.isAdding) {
      this.blogsItem.unshift(item);
      this.isAdding = false;
    } else {
      this.editingItem.name = item.name;
      this.editingItem.description = item.description;
    }
  }

  onDelete(id: number) {
    let itemToDelete = this.blogsItem.filter(item => item.id === id);
    let indexToDelete = this.blogsItem.indexOf(itemToDelete[0]);
    this.blogsItem.splice(indexToDelete, 1);
  }
}