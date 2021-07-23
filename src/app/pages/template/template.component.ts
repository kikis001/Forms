import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  
  usuario = {
    nombre: 'Akihiko',
    apellido: 'Kayaba',
    email: 'kikisxx.150@gmail.com'
  }

  paises:any[] = []
  constructor(private pais:PaisService) { }

  ngOnInit(): void {
    this.pais.getPaises()
    .subscribe( (data:any) => {
      this.paises = data
      console.log(data)
    })
  }

  guardar(forma:NgForm){
    if(forma.invalid){
      Object.values(forma.controls).forEach(controls => {
        controls.markAsTouched()
      })
      return
    }
    // console.log(forma)
    // console.log(forma.value)
  }
}
