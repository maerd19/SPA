import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  constructor(private aCtivatedRoute:ActivatedRoute) {
    this.aCtivatedRoute.params.suscribe(params => {
      console.log(params);
    })
  }

  ngOnInit() {
  }
}
