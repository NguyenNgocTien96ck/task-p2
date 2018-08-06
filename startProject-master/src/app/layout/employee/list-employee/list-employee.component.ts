import { Component, OnInit,ViewChild } from '@angular/core';
import {EmployeeService} from '../employee-service';
import { Employee } from '../Employee';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import {RemoteComponent} from './remote/remote.component' 
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
public dataEmployee:Array<Employee>=[];
@ViewChild(RemoteComponent)
del: RemoteComponent;
  constructor(private dataService:EmployeeService)
  {
    
  }

  ngOnInit() {
    this.dataEmployee =  this.dataService.getLists();
  }
  ngAfterViewInit() {
    this.dataEmployee = this.dataService.getLists();
  }
  uuid: string;
  show(obj) {
    this.del.openModal(obj);
    this.uuid = obj.id;
  }
  onDelete() {
    this.dataEmployee = this.dataService.remove(this.uuid);
  }
}
