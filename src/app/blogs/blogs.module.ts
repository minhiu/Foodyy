import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsRoutingModule } from './blogs-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutModule } from '../layout/layout.module';
import { BlogsComponent } from './blogs.component';

@NgModule({
    declarations: [
        BlogListComponent,
        BlogDetailComponent,
        SideBarComponent,
        BlogsComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        BlogsRoutingModule,
        LayoutModule
    ]
})
export class BlogsModule { }