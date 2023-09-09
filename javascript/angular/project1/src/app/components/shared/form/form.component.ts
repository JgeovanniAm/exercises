import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// services provider
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  public validate: boolean = false
  private _taskService: TaskService;

  constructor(TaskService: TaskService) {
    this._taskService = TaskService
  }
  ngOnInit() { }

  private handleData<T>(form): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      form ? resolve(form) : reject(this.erroMess());
    })
  }

  handleSubmit(form: NgForm): void {
    form.control.valid
      ? this.handleData<NgForm>(form).
        then((result) => {
          this.validate = false;
          this._taskService.pushNewTask(result.value);
          result.reset(); // clear form
        }).
        catch(err => new Error(err))
      : this.validate = true;
  }

  closeModal(event): void { // change state from child component
    this.validate = event;
  }

  erroMess(): string {
    return 'it have happpend a erro with you form'
  }
}
