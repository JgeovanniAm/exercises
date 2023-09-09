import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
})
export class IdComponent implements OnInit {

  constructor(public ActivatedRoute : ActivatedRoute){
    console.log(this.ActivatedRoute.params)
  }
  ngOnInit() {
  }

}
