import {Injectable} from '@angular/core';
import { Employee } from './Employee';
import {DetailEmployeeComponent} from './detail-employee/detail-employee.component';
import {Observable} from 'rxjs';
@Injectable()
export class EmployeeService {
    dataEmployee:Array<Employee> =[ 
        {uuid:'1',firstName:'Nguyễn',lastName:'Ngọc Tiến',gender:true,phone:'0898202503',address:'Tam Đàn',salary:6000000,responsibilities:['1','2','3']},
        {uuid:'2',firstName:'Nguyễn',lastName:'Thành An',gender:true,phone:'0906561156',address:'Núi Thành',salary:6000000,responsibilities:['3','2','1']},
        {uuid:'3',firstName:'Nguyễn',lastName:'Ngọc Trung Kiên',gender:false,phone:'09432491740',address:'Thăng Bình',salary:6000000,responsibilities:['5','6','7']}
    ];
    constructor() {
        const data = JSON.parse(localStorage.getItem('renumber'));
        if(data){
            return;
        }
        localStorage.setItem('renumber', JSON.stringify(this.dataEmployee));
    }
     getLists() {
        console.log(JSON.parse(localStorage.getItem('renumber')));
         return  JSON.parse(localStorage.getItem('renumber'));
     }
     save(promotion: Employee): boolean {
        
        const arrays = this.getLocal();
         const objectOld = arrays.find( p => p.uuid === promotion.uuid);
         
         if ( objectOld ) {
             const position = arrays.indexOf(objectOld);
             arrays[position] = promotion;
             console.log(arrays);
             localStorage.setItem('renumber', JSON.stringify(arrays));
             return true;
         } else {
            this.dataEmployee.push(promotion);
            localStorage.setItem('renumber', JSON.stringify(this.dataEmployee));
            return false;
         }
     }
     remove(uuid: string): Array<Employee> {
        const arrays =  this.getLocal();
        //console.log(arrays.splice(arrays.indexOf(arrays.find(p => p.uuid === uuid)), 1));
       // debugger;
        arrays.splice(arrays.indexOf(arrays.find(p => p.uuid === uuid)), 1);
        localStorage.setItem('renumber', JSON.stringify(arrays));
        return this.getLocal();
     }
     getID(uuid:string):Employee{
        return this.getLocal().find(p=>p.uuid===uuid);
    }
    id_delete(uuid:string){
        localStorage.setItem('id_delete',JSON.stringify(uuid));
     }
     getLocal(): Array<Employee> {
         return JSON.parse(localStorage.getItem('renumber'));
     }
     id_getName(uuid:string) :string {
        return this.getLocal().find(p=>p.uuid===uuid).lastName;
     }
    }