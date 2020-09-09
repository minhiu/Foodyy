import { FoodsService } from './../../core/service/foods.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class WesternFoodResolverService implements Resolve<any> {
    constructor(private foodsService: FoodsService) {}

    resolve(): Observable<any> {
        return this.foodsService.getWesternFood("fakeAPIUrl").pipe(
            catchError(_ => {
                return of([]);
            })
        )
    }
}