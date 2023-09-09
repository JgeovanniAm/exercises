import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-wrap',
  templateUrl: './counter-wrap.component.html',
  styleUrls: ['./counter-wrap.component.css']
})
export class CounterWrapComponent {
  private counter: number = 0
  private name: string = 'jimy'
  increment() {
    this.counter++
  }
  GetCounter(): number {
    return this.counter
  }
  getName():string{
    return this.name
  }
  incrementCounter(event) {
    this.counter = event
    this.counter++
  }
}
