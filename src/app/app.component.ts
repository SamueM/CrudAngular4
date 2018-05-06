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

  modelo = { 
    nombreAdd: '',
    puestoAdd:'' ,
    editarNombre : '' ,
    editarPuesto : '' ,
    editarId : ''
  } ;

  // Añade un empleado a array
  addEmpleado():void{
    this.addNombreInput = false ;
    this.addPuestoInput = false ;
    console.log(this.modelo.nombreAdd +" "+ this.modelo.puestoAdd);
    if(this.modelo.nombreAdd !='' && this.modelo.puestoAdd !=''){
      console.log(' ================ Guardando ================ ');
      this.empleado.push({
        'ID': this.empleado.length+1+'' ,
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
    console.log("Pruebas: "+id);
    var IDaBorrar:number ;
    for(var i = 0 ; i < this.empleado.length ;i++){
      if(this.empleado[i].ID == id ){
        IDaBorrar = i ;
      }
    }
    this.empleado.splice(IDaBorrar,1);
    return true ;
  }

  // Coge los datos para ser editados
  editEmpleado(id:string):void{
    let e ;
    this.empleado.forEach(function(valor){
      if(id == valor.ID){
        e = valor ;
      }
    });
    this.modelo.editarNombre = e.nombre ;
    this.modelo.editarPuesto = e.posicion ;
    this.modelo.editarId = e.ID ;
  }

  // Actualiza los datos 
  reemplazarEmpleado():void{
    if(this.modelo.editarNombre != '' && this.modelo.editarPuesto != ''){
      for(var i = 0 ; i < this.empleado.length ;i++){
        console.log( this.empleado[i].ID +" "+ this.modelo.editarId );
        if(this.empleado[i].ID == this.modelo.editarId ){
          this.empleado[i].ID = this.modelo.editarId ;
          this.empleado[i].nombre = this.modelo.editarNombre ;
          this.empleado[i].posicion = this.modelo.editarPuesto ;
        }
      }
      this.modelo.editarNombre = '' ;
      this.modelo.editarPuesto = '' ;
      this.modelo.editarId = '' ;
    }
  }

  // Ocultar NotificacionSuccess
  hideNotificacionSuccess():void{
    this.notificacionSuccess = !this.notificacionSuccess ;
  }
}
