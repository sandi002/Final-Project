import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    return this.getdata().then(
      data => {
        data = JSON.parse(data);
        if(data['usrid'] != 0) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      },
      error => {
        this.router.navigate(['/login']);
        return false;
      }
    );
  }

  async getdata(){
    const token = await Preferences.get({ key: "data" });
    return token.value;
  }
}
