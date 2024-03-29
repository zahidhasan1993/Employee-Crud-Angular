import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Interfaces/employeeInterface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeAddRequest : Employee = {
    id: 0,
    name: "",
    email: "",
    address: "",
    salary: 0
  }

  constructor (private employeeService : EmployeesService, private router : Router) {}

  ngOnInit(): void {
    
  }

  addEmployee(){
    console.log(this.employeeAddRequest);
    this.employeeService.addEployee(this.employeeAddRequest).subscribe({
      next: (result) => {
        console.log("come from success",result);
        this.router.navigate(["/"])
        
      },
      error: (response) => {
        console.log(response);
        
      }
    })
    
  }
}
