import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  left = faArrowCircleLeft;
  right = faArrowCircleRight;
}
