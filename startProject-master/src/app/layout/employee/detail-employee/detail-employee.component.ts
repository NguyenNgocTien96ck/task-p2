import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee-service';
import { Employee } from '../Employee';
import {FormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Location} from '@angular/common'

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.scss']
})
export class DetailEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  responsilitie:string | null;
  titleAlert:string = "Vui lòng điền đầy đủ thông tin";
  frmEmployee:FormGroup;
  
  constructor(private location: Location,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,private fb:FormBuilder) {
      this.frmEmployee = fb.group({
        'uuid' : [null,Validators.required],
        'firstName':[null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(50)])],
        'lastName':[null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(50)])],
        'gender':[null,Validators.required],
        'phone':[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(11)])],
        'address':[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(100)])],
        'salary':[null,Validators.compose([Validators.required])],
        'responsilitie':[null,Validators.compose([Validators.required])]
      });
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
