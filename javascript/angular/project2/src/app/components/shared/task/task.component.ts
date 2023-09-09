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
  private arryTask: Array<IformTask> = []
  @Input() type: string

  constructor(TaskService: TaskService) {
    this._taskService = TaskService;
  }

  ngOnInit() {
    this.getAllTask();
  }

  private getAllTask(): void { // request of my data and save this data to my state
    if (this.type === 'pending') this._taskService.getAlltask().subscribe((data: Array<IformTask>) => {
      this.arryTask = data.filter((item: IformTask) => item.status === false);
    })
    else this._taskService.getAlltask().subscribe((data: Array<IformTask>) => {
      this.arryTask = data.filter((item: IformTask) => item.status === true);
    });
  }

  removeCard(item: IformTask): void {
    this._taskService.deleteTask(item).toPromise().then(() => {
      this.getAllTask();
    })
  }

  handleStateCard(item: IformTask): void {
    this._taskService.updateTask(item).toPromise().then(() => {
      this.getAllTask()
    })
  }
}
