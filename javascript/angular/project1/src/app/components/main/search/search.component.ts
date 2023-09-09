import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private _taskService: TaskService
  public data: any
  constructor(TaskService: TaskService) {
    this._taskService = TaskService;
  }
  ngOnInit() {
    this.data = this._taskService.searchedTask;
  }
}
