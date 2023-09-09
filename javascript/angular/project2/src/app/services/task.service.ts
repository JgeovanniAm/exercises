import { Injectable } from '@angular/core';
import { IformTask } from '../const'; // interface
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private HttpClient: HttpClient
  ) { }

  public newTaskPost(item: any, post: string): Observable<Object> {
    return this.HttpClient.post(post, item);
  }
  public getAlltask(): Observable<Object> {
    return this.HttpClient.get(`http://localhost:4000/api/task`);
  }
  public deleteTask(item:IformTask): Observable<Object> {
    return this.HttpClient.delete(`http://localhost:4000/api/d_task/${item._id}`);
  }
  public updateTask(item:IformTask): Observable<Object> {
    console.log(item)
    return this.HttpClient.put(`http://localhost:4000/api/u_task/${item._id}`, {
      status: !item.status
    }, 
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
