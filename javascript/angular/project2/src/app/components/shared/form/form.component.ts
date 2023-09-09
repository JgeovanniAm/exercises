import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../../services/task.service';

// services provider

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  public validate: boolean = false
  private file: string | null = null

  constructor(private TaskService: TaskService) { }

  private handleData<T>(form): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      form ? resolve(form) : reject(this.erroMess());
    })
  }

  private processDataForm(result: NgForm): void {
    this.validate = false;
    const { name, title, description } = result.value;
    const fd = new FormData();
    fd.append('file', this.file);
    fd.append('name', name);
    fd.append('title', title);
    fd.append('description', description);
    this.TaskService.newTaskPost(fd, 'http://localhost:4000/api/newTask').subscribe((data: any) => {
      if (data.message) result.reset()
    })
  }

  private snapFile(event): void {
    this.file = event.target.files[0]
  }

  handleSubmit(form: NgForm): void {
    form.control.valid
      ? this.handleData<NgForm>(form).
        then(result => {
          this.processDataForm(result)
        }).catch(err => new Error(err))
      : this.validate = true;
  }

  erroMess = (): string => 'it have happpend a erro with you form'

  closeModal(event): void { // change state from child component
    this.validate = event;
  }

  ngOnInit() { }

}
