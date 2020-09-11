import { OnInit , Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { disableBodyScroll, enableBodyScroll } from '../../../../../node_modules/body-scroll-lock/lib/bodyScrollLock.es6.js';

@Component({
  selector: 'app-blog-list-add-edit',
  templateUrl: './blog-list-add-edit.component.html',
  styleUrls: ['./blog-list-add-edit.component.scss']
})
export class BlogListAddEditComponent implements OnInit{
  @Output() isDialogOpen = new EventEmitter<boolean>();
  @Output() item = new EventEmitter<Object>();
  @Input() isAdding: boolean;
  @Input() editingItem: any;

  lockScrollTarget = document.body;

  ngOnInit(): void {
    if (!this.isAdding) {
      this.addBlogListForm.setValue( {
        name: this.editingItem.name,
        description: this.editingItem.description
      })
    }
    disableBodyScroll(this.lockScrollTarget);
  }

  addBlogListForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  closeDialog() {
    this.isDialogOpen.emit(false);
    enableBodyScroll(this.lockScrollTarget);
  }

  onSubmit() {
    const { name, description } = this.addBlogListForm.value;
    let body = {
      name: name,
      description: description
    };
    if (this.isAdding) {
      body['id'] = 1;
      body['date'] = 'September 09, 2020';
      body['category'] = 'Vietnamese Food';
      body['likes'] = 96;
      body['imgSrc'] = 'assets/images/pho-bo.jpeg';
    } else {
      body['id'] = this.editingItem.id;
    }
    this.closeDialog();
    this.item.emit(body);
  }
}
