import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private TaskService: TaskService
  constructor(private router: Router, TaskService: TaskService) {
    this.TaskService = TaskService;
  }

  search(e): void {
    if(e.value === '') alert();
    else {
      this.TaskService.searchTask(e.value);
      this.redirectBtn()
    };
  }

  redirectBtn() {
    this.router.navigate(['/search'])
  }

  ngOnInit() {
  }

}
