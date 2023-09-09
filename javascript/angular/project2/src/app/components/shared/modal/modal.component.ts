import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  @Input() validate:boolean;
  @Output() closeModalEventEmit: EventEmitter<boolean>
  constructor(){
    this.closeModalEventEmit = new EventEmitter()
  }

  ngOnInit() {}

  close():void {
    this.validate = false;
    this.closeModalEventEmit.emit(this.validate)
  }
}
