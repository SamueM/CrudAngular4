import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular CRUD';

  empleado = [
    {'ID':'1', 'nombre':'Samuel M.','posicion':'Analista de Sistemas'},
    {'ID':'2', 'nombre':'Pepito','posicion':'Jefe de proyecto'},
    {'ID':'3', 'nombre':'Lucia','posicion':'Manager'}
  ]

  // Añade un empleado a array
  addEmpleado():void{
    
  }

  // Borra un empleado del array
  deleteEmpleado():boolean{
    return true ;
  }

  // Coge los datos para ser editados
  editEmpleado():void{

  }

  // Actualiza los datos 
  reemplazarEmpleado():void{

  }
}
