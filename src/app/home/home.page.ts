import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor() {}

  nombre = new FormControl('');
  apellido = new FormControl(''); 
  correo = new FormControl('');

  usuario: {nombre: string, apellido: string, correo: string}[] = [];
  editIndex: number | null = null;

  agregarUsuario() {
    if (this.nombre.value && this.apellido.value && this.correo.value) {
      if (this.editIndex !== null) {
        this.usuario[this.editIndex] = {
          nombre: this.nombre.value,
          apellido: this.apellido.value,
          correo: this.correo.value
        };
        this.editIndex = null; 
      } else {
        const user = {
          nombre: this.nombre.value,
          apellido: this.apellido.value,
          correo: this.correo.value
        };
        this.usuario.push(user);
      }

      this.nombre.setValue('');
      this.apellido.setValue('');
      this.correo.setValue('');
    } else {
      alert('Ingrese todos los campos');
    }
  }

  editarUsuario(index: number) {
    const user = this.usuario[index];
    this.nombre.setValue(user.nombre);
    this.apellido.setValue(user.apellido);
    this.correo.setValue(user.correo);
    this.editIndex = index;
  }

  eliminarUsuario(index: number) {
    this.usuario = [
      ...this.usuario.slice(0, index),
      ...this.usuario.slice(index + 1)
    ];
  }
}
