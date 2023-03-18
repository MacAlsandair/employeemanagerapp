import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private apiServerUrl = '';

  constructor (private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
  }
}