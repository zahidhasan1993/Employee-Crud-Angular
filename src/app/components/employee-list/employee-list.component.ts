import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Interfaces/employeeInterface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[] = [];

  constructor(private employeeService: EmployeesService){}

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe(
      {
        next: (employee) => {
          console.log(employee);
          if (employee.length > 0) {
            this.employees = employee;
          }
          
        },
        error: (response) => {
          console.log(response);
          
        }
      }
    )
  }

  deleteEmployee(id:number){

    // console.log(typeof(id));
    

    this.employeeService.deleteEmployee(id).subscribe({
      next: (res) => {
        const index = this.employees.findIndex(employee => employee.id === id);
        if (index !== -1) {
          this.employees.splice(index, 1); // Remove the deleted employee locally
        }
        console.log(`Employee with ID ${id} deleted successfully.`);
        console.log(res);
        
        
      },
      error: (err) => {
        console.log(err);
        
      }

    })
  }

}
