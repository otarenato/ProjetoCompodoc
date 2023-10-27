import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public _theme: string = 'primary';

  constructor(private _usuarioService: UsuarioService) {

  }

  ngOnInit(): void {
    let theme = localStorage.getItem('tema');
    this._theme = theme === 'tema1' ? 'primary' : 'warn';
  }

  deslogar(): void {
    this._usuarioService.deslogar();
  }
}
