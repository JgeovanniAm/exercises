import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-btn-child',
  templateUrl: './btn-child.component.html',
  styleUrls: ['./btn-child.component.css']
})
export class BtnChildComponent implements OnInit {
  @Input() counter: number
  @Output() counterFromChild: EventEmitter<number>;
  constructor() { 
    this.counterFromChild = new EventEmitter()
  }

  ngOnInit() {
  }

  incrementCounterfromChild(){
    this.counterFromChild.emit(this.counter)
  }

}
