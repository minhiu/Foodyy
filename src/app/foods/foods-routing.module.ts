import { WesternFoodResolverService } from './western-food/western-food-resolver.service';
import { FoodsComponent } from './foods.component';
import { WesternFoodComponent } from './western-food/western-food.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
    {
        path: '',
        component: FoodsComponent,
        children: [
            {
                path: 'western-food',
                component: WesternFoodComponent,
                resolve: {
                    list: WesternFoodResolverService
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FoodsRoutingModule { }
  