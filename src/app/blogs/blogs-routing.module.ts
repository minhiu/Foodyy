import { BlogListResolverService } from './blog-list/blog-list-resolver.service';
import { BlogsComponent } from './blogs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    children: [
      {
        path: '',
        component: BlogListComponent,
        resolve: {
          blogList: BlogListResolverService
        },
      },
      {
        path: ':id',
        component: BlogDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
