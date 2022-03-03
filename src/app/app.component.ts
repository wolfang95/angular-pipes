import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  activar: boolean = false;
  nombre: string = "Capitán América";
  nombre2: string = "WolFAng CoRredor";
  video:string  ='https://www.youtube.com/embed/FWtWJAmHuc8';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI : number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha : Date = new Date();
  idioma :string = 'es';
  valorPromesa = new Promise <string>((resolve) => {

    setTimeout(()=>{
      resolve('llego la data')
    },3500);
  });



  heroe ={
    nombre:'Logan',
    clave: 'wolf',
    edad: 500,
    direccion: {
      calle:'siempre viva',
      casa: ' 123'
    }

  }

}
