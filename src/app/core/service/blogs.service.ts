import { listBlogData } from './data-fake/list-blog-data';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class BlogsService {
    constructor() { }

    getWesternFood(api): Observable<any> {
        const fakeObservable = of(listBlogData).pipe(delay(0));
        return fakeObservable;
    }
}