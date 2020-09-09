import { BlogsService } from './../../core/service/blogs.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BlogListResolverService implements Resolve<any> {
    constructor(private blogsService: BlogsService) {}

    resolve(): Observable<any> {
        return this.blogsService.getWesternFood("fakeAPIUrl").pipe(
            catchError(_ => {
                return of([]);
            })
        )
    }
}