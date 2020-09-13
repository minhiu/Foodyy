import { TextAutofocusDirective } from './../../shared/directives/text-auto-focus.directive';
import { StringOnlyDirective } from './../../shared/directives/string-only.directive';
import { ServerStatusPipe } from './../../shared/pipes/server-status.pipe';
import { BlogListResolverService } from './blog-list/blog-list-resolver.service';
import { BlogsService } from './../core/service/blogs.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BlogsRoutingModule } from './blogs-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutModule } from '../layout/layout.module';
import { BlogsComponent } from './blogs.component';
import { BlogListAddEditComponent } from './blog-list/blog-list-add-edit/blog-list-add-edit.component';
import { ControlContentComponent } from './blog-list/control-content/control-content.component';

@NgModule({
    declarations: [
        BlogListComponent,
        BlogDetailComponent,
        SideBarComponent,
        BlogsComponent,
        BlogListAddEditComponent,
        ControlContentComponent,
        ServerStatusPipe,
        StringOnlyDirective,
        TextAutofocusDirective
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        BlogsRoutingModule,
        LayoutModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        BlogsService,
        BlogListResolverService,
        ServerStatusPipe
    ]
})
export class BlogsModule { }