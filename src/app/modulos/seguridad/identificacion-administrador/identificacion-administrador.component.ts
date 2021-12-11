import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identificacion-administrador',
  templateUrl: './identificacion-administrador.component.html',
  styleUrls: ['./identificacion-administrador.component.css']
})
export class IdentificacionAdministradorComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  IdentificarUsuario() {
    let usuario = this.fgValidator.controls["usuario"].value;
    let clave = this.fgValidator.controls["clave"].value;
    // #TODO
    alert(`${usuario} | ${clave}`)
  }

}
