import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()

export class AuctionDetailGuard implements CanActivate {

    constructor(private _router: Router){}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;

        if(isNaN(id) ||id < 1){
            alert('Felaktigt auktionsid angiven!')

            this._router.navigate(['/auctions']);

            return false;
        }

        return true;
    }
}