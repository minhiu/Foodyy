import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { westernFoodData } from './data-fake/western-food-data';

@Injectable()
export class FoodsService {
    constructor() { }

    getWesternFood(api): Observable<any> {
        const fakeObservable = of(westernFoodData).pipe(delay(500));
        return fakeObservable;
    }
}