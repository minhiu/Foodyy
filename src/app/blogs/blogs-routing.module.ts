import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: 'blog-list',
    component: BlogListComponent,
  },
  {
    path: 'blog-list/:id',
    component: BlogDetailComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
