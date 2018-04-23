import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular CRUD';

  notificacionSuccess:boolean = true ;
  addNombreInput:boolean = false ;
  addPuestoInput:boolean = false ;


  empleado = [
    {'ID':'1', 'nombre':'Samuel M.','posicion':'Analista de Sistemas'},
    {'ID':'2', 'nombre':'Pepito','posicion':'Jefe de proyecto'},
    {'ID':'3', 'nombre':'Lucia','posicion':'Manager'}
  ]

  modelo = {nombreAdd: '', puestoAdd:''} ;

  // Añade un empleado a array
  addEmpleado():void{
    this.addNombreInput = false ;
    this.addPuestoInput = false ;
    console.log(this.modelo.nombreAdd +" "+ this.modelo.puestoAdd);
    if(this.modelo.nombreAdd !='' && this.modelo.puestoAdd !=''){
      console.log(' ================ Guardando ================ ');
      this.empleado.push({
        'ID': this.empleado.length+'' ,
        'nombre': this.modelo.nombreAdd,
        'posicion': this.modelo.puestoAdd
      });
      this.modelo.nombreAdd = '' ;
      this.modelo.puestoAdd = '' ;
    } else {
      this.addNombreInput = this.modelo.nombreAdd == '' ? true: false ;
      this.addPuestoInput = this.modelo.puestoAdd == '' ? true: false ;
    }
  }

  // Borra un empleado del array
  deleteEmpleado(id:string):boolean{
    alert("Pruebas: "+id);
    return true ;
  }

  // Coge los datos para ser editados
  editEmpleado(id:string):void{
    alert("Pruebas: "+id);

  }

  // Actualiza los datos 
  reemplazarEmpleado():void{

  }

  // Ocultar NotificacionSuccess
  hideNotificacionSuccess():void{
    this.notificacionSuccess = !this.notificacionSuccess ;
  }
}
