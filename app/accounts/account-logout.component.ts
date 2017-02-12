import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { Login } from './login';

import { AccountUserService } from './account-user.service';

@Component({
    moduleId: module.id,
    template: `
    <h1>{{title}}</h1>
    `,
    styleUrls: ['./account.component.css']
})

export class AccountLogoutComponent {
    title = 'Logga ut';

    constructor(
        private _accountUserService: AccountUserService,
        private location: Location
    ){}

    ngOnInit(){
        this._accountUserService.getLogout()
        .then(result => this.goBack());
    }

    goBack(): void {
    this.location.back();
    }
}