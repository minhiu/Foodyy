import { ActivatedRoute } from '@angular/router';
import { FoodsService } from './../../core/service/foods.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-western-food',
  templateUrl: './western-food.component.html',
  styleUrls: ['./western-food.component.scss']
})
export class WesternFoodComponent implements OnInit {

  westernFoodItem: any[];
  constructor(
    private foodsService: FoodsService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void { 
    this.activatedRoute.data.subscribe(
      res => {
        this.westernFoodItem = res.list.data;
        console.log(res.list.data);
      }
    )
  }
}
