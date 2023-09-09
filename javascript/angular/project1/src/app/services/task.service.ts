import { Injectable } from '@angular/core';
import { IformTask } from '../const';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskArr: Array<IformTask> = [];
  private queryTask: Array<IformTask> = []
  constructor() { }

  get searchedTask(): Array<IformTask> {
    return this.queryTask
  }

  set searchedsetTask(newValue: IformTask[]) {
    this.queryTask = newValue;
  }

  public getTasksArr(): Array<IformTask> {
    return this.taskArr;
  }

  public pushNewTask(item: IformTask) {
    Object.assign(item, { completed: false }) // add property comnpleted
    this.taskArr = [...this.taskArr, item];
  }

  public deleteTask(task: IformTask) {
    this.taskArr = this.taskArr.filter(item => item.name !== task.name)
  }

  public changeStateTask(task: IformTask): void { // change state of completed task
    const findTask = this.taskArr.find(item => task.name === item.name);
    findTask.completed = !findTask.completed;
    this.taskArr = [...this.taskArr];
  }
  public searchTask(value:string): void {
    const result = this.taskArr.filter(item => (item.name.toLowerCase().indexOf(value) > -1));
    this.searchedsetTask = result
  }
}
