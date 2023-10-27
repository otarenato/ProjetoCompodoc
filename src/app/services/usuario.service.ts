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
        localStorage.setItem('tema', resposta.tema);
        this.router.navigate(['']);
      }));
  }

  private mockUsuarioLogin(usuario: IUsuario): Observable<any> {
    var retornoMock: any = [];
    if(usuario.email === "teste@teste.com" && usuario.senha == "123"){
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
      retornoMock.tema = "tema1";
      return of(retornoMock);
    } else if(usuario.email === "teste2@teste.com" && usuario.senha == "123"){
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
      retornoMock.tema = "tema2";
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

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  
}
