import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { IformTask } from '../../../const';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  private _taskService: TaskService
  @Input() type: string

  constructor(TaskService: TaskService) {
    this._taskService = TaskService;
  }

  ngOnInit() {
    this.getAllTask();
    console.log('render component card', this.type)
  }

  getAllTask(): Array<IformTask> {
    if (this.type === 'pending') return this._taskService.getTasksArr().filter(item => item.completed === false);
    else return this._taskService.getTasksArr().filter(item => item.completed === true); 
  }

  removeCard(task: IformTask) {
    this._taskService.deleteTask(task);
  }

  handleStateCard(task: IformTask) { // item of my tasks array
    this._taskService.changeStateTask(task);
  }
}
