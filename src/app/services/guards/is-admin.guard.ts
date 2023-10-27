import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})

class AdminGuard {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router) { }

  canActivate(): boolean {
    if (this.usuarioService.logado) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
  }
}

export const isAdminGuard: CanActivateFn = () => {
  return inject(AdminGuard).canActivate();
};
