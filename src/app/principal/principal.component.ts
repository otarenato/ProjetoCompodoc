import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {

  constructor(private _usuarioService: UsuarioService) {

  }

  deslogar(): void {
    this._usuarioService.deslogar();
  }
}
