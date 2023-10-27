import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUsuario } from '../Interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  logar(usuario: IUsuario) : Observable<any> {
      return this.mockUsuarioLogin(usuario).pipe(tap((resposta) => {
        if(!resposta.sucesso) return;
        localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
        localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
        this.router.navigate(['']);
      }));
  }

  private mockUsuarioLogin(usuario: IUsuario): Observable<any> {
    var retornoMock: any = [];
    if(usuario.email === "teste@teste.com" && usuario.senha == "123"){
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
      return of(retornoMock);
    }
    retornoMock.sucesso = false;
    retornoMock.usuario = usuario;
    return of(retornoMock);
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  // get obterUsuarioLogado(): IUsuario {
  //   return localStorage.getItem('usuario')
  //     ? JSON.parse(atob(localStorage.getItem('usuario')))
  //     : null;
  // }

  // get obterTokenUsuario(): string {
  //   return localStorage.getItem('token')
  //     ? JSON.parse(atob(localStorage.getItem('token')))
  //     : null;
  // }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  
}
