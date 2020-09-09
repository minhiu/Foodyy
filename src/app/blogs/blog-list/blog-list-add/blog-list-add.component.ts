import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-list-add',
  templateUrl: './blog-list-add.component.html',
  styleUrls: ['./blog-list-add.component.scss']
})
export class BlogListAddComponent {
  @Output() isAddingFromChild = new EventEmitter<boolean>();
  @Output() item = new EventEmitter<Object>();

  close = faWindowClose;
  isSubmitted: boolean;

  addBlogListForm = new FormGroup({
    name: new FormControl(''),
    date: new FormControl('')
  });

  toggleWindow() {
    this.isSubmitted = true;
    this.isAddingFromChild.emit(false);
  }

  onSubmit() {
    this.isSubmitted = true;
    this.isAddingFromChild.emit(false);
    this.item.emit({
      'id': 1,
      'name': this.addBlogListForm.value.name,
      'date': this.addBlogListForm.value.date,
      'category': 'Vietnamese Food',
      'likes': 96,
      'imgSrc': 'assets/images/pho-bo.jpeg',
      'imgAlt': 'pho-bo'
    })
  }
}
