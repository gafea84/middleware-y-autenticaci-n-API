import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup;

  constructor(
    private usuariosService: UsuariosService
  ) {
    this.formRegistro = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const response = await this.usuariosService.registro(this.formRegistro.value);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

}
