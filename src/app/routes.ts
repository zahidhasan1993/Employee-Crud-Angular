
import { Routes } from "@angular/router";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { EditEmployeeComponent } from "./components/edit-employee/edit-employee.component";

export const routes : Routes = [
    {
        path: "",
        component: EmployeeListComponent
    },
    {
        path: "employees",
        component:EmployeeListComponent
    },
    {
        path: "employees/add",
        component: AddEmployeeComponent
    },
    {
        path: "employees/edit/:id",
        component: EditEmployeeComponent
    }
];