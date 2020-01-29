import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private roteador : Router
    ){

    }

    canActivate(): boolean {
        if(localStorage.getItem('mail-token')){
            return true;
        }else{
            this.roteador.navigate(['']);
            return false;
        }
    }

}