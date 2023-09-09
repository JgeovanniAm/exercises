import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardfound',
  templateUrl: './cardfound.component.html',
  styleUrls: ['./cardfound.component.css']
})
export class CardfoundComponent implements OnInit {
  @Input() data: string

  ngOnInit() {
    console.log(this.data)
  }

}
