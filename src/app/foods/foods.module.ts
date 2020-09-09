import { HttpClient, HttpHandler } from '@angular/common/http';
import { FoodsService } from './../core/service/foods.service';
import { WesternFoodResolverService } from './western-food/western-food-resolver.service';
import { FoodsComponent } from './foods.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodsRoutingModule } from './foods-routing.module';
import { WesternFoodComponent } from './western-food/western-food.component';

@NgModule({
    declarations: [
        FoodsComponent,
        WesternFoodComponent
    ],
    imports: [
        CommonModule,
        FoodsRoutingModule
    ],
    providers: [
        WesternFoodResolverService,
        FoodsService,
    ]
})
export class FoodsModule { }

