import { Component } from '@angular/core';

import { Account } from './accounts/account';
import { IAuction } from './auctions/auction';
import { IBid } from './auctions/bid';
import { BuyNow } from './auctions/buy-now';
import { ICategory } from './auctions/category';
import { Login } from './accounts/login';
import { ISupplier } from './auctions/supplier';

import { AuctionService } from './auctions/auction.service';
import { AccountUserService } from './accounts/account-user.service';

@Component({
    selector: 'am-app',
    moduleId: module.id,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        AuctionService,
        AccountUserService
        ]
})

export class AppComponent {
    title = 'Nackademiska Auktionsfrämjandet';
    isLoggedIn: Boolean;

    constructor(private _accountUserService: AccountUserService){}

    ngDoCheck(){
        this.isLoggedIn = this._accountUserService.isLoggedIn();
    }
 }
