import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog-list',
    loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)
  },
  {
    path: 'foods',
    loadChildren: () => import('./foods/foods.module').then(m => m.FoodsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
