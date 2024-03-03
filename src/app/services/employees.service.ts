import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../Interfaces/employeeInterface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseUrl : string = environment.baseUrl;
  constructor(private http : HttpClient) { }

  getAllEmployee(): Observable<Employee[]> {
   return this.http.get<Employee[]>(this.baseUrl + 'api/Employee');
  }
  addEployee(body: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl + 'api/Employee',body);
  }

}
