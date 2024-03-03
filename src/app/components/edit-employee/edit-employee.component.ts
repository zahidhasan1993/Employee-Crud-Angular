import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Interfaces/employeeInterface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeEditRequest : Employee = {
    id: 0,
    name: "",
    email: "",
    address: "",
    salary: 0
  }
  constructor(private route : ActivatedRoute, private employeeService : EmployeesService, private router : Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
       const id = params.get('id');
       if (id) {
        const newId = parseInt(id);
        console.log(newId);
        
        this.employeeService.getSingleEmployee(newId).subscribe({
          next: (res) => {
            console.log('from update page',res);
            this.employeeEditRequest = res;
            
          
          }
        })
       }
      }
    })
  }

  updateEmployee () {
    const id = this.employeeEditRequest.id;
   console.log(typeof(id));
   
    this.employeeService.updateEmployee(id,this.employeeEditRequest).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(["/"])
        
      }
    })
  }
}
