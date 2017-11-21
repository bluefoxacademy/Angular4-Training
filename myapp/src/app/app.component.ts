import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app title...';
  selectedEmployee;
  newEmployee={};
  sayHello(){
    alert('hello');
  }

  employees = [
    {
      name: 'Ajith',
      age: 50
    },
    {
      name: 'Raj',
      age: 65
    }
  ]

  onSelectEmployee(employee){
    this.selectedEmployee = employee;
  }
  addEmployee(name, age){
    this.employees.push({
      name:name,
      age:age
    });
  }

}
