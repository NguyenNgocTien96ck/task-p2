import { EmployeeRoutingModule} from './employee-routing.module';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { EmployeeService } from './employee-service';
import {RouterModule} from '@angular/router';
import { TabsModule, BsDatepickerModule, TimepickerModule} from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

// RECOMMENDED (doesn't work with system.js)
import { ModalModule } from 'ngx-bootstrap/modal';
import { RemoteComponent } from './list-employee/remote/remote.component';


@NgModule({
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TabsModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        RouterModule,
        ModalModule.forRoot()
        
    ],
    providers: [
      EmployeeService,
      BsModalService
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [DetailEmployeeComponent,ListEmployeeComponent, RemoteComponent]
})

export class EmployeeModule {}

