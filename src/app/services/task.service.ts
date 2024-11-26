import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5282//api/Task';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.getHeaders() });
  }

  addTask(title: string, description: string): Observable<any> {
    return this.http.post(this.apiUrl, { title, description }, { headers: this.getHeaders() });
  }

  updateTask(task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${task.id}`, task, { headers: this.getHeaders() });
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return { Authorization: `Bearer ${token}` };
  }
}
