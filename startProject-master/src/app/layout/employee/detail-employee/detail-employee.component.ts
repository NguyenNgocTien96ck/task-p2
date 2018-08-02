import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee-service';
import { Employee } from '../Employee';
import {FormsModule} from '@angular/forms';
import {Location} from '@angular/common';
import {moment} from 'ngx-bootstrap/chronos/test/chain';
import {TabsetComponent} from 'ngx-bootstrap';
@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.scss']
})
export class DetailEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  responsilitie:string | null;
  constructor(private location: Location,
    private route: ActivatedRoute,
    private employeeService: EmployeeService) {
    this.route.paramMap.subscribe(params => {
      this.employee.uuid = params.get('id');
    }
    );
  }

  ngOnInit() {
    if(this.employee.uuid)
      {
        this.employee = this.employeeService.getID(this.employee.uuid);
        this.responsilitie = this.employee.responsibilities.join();
      }
      
  }

  back():void {
    this.location.back();
  }
  resetForm():void{
    this.employee = new Employee();
    this.responsilitie = "";
  }
  onSave():void {
    console.log(this.responsilitie);
    this.employee.responsibilities = this.responsilitie.split(",",150);
    // console.log(this.employee.responsibilities);
    if(this.employeeService.save(this.employee)){
      this.back();
    }
  }
}
