import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter-p',
  templateUrl: './counter-p.component.html',
  styleUrls: ['./counter-p.component.css']
})
export class CounterPComponent implements OnInit {
  @Input() counter: number

  ngOnInit() {
  
  }

}
