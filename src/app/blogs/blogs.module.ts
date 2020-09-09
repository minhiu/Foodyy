import { BlogListResolverService } from './blog-list/blog-list-resolver.service';
import { BlogsService } from './../core/service/blogs.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogsRoutingModule } from './blogs-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutModule } from '../layout/layout.module';
import { BlogsComponent } from './blogs.component';
import { BlogListAddComponent } from './blog-list/blog-list-add/blog-list-add.component';

@NgModule({
    declarations: [
        BlogListComponent,
        BlogDetailComponent,
        SideBarComponent,
        BlogsComponent,
        BlogListAddComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        BlogsRoutingModule,
        LayoutModule,
        ReactiveFormsModule
    ],
    providers: [
        BlogsService,
        BlogListResolverService
    ]
})
export class BlogsModule { }