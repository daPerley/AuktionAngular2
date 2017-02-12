import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { Login } from './login';

import { AccountUserService } from './account-user.service';

@Component({
    moduleId: module.id,
    templateUrl: './account-login.component.html',
    styleUrls: ['./account.component.css']
})

export class AccountLoginComponent {
    title = 'Logga in'
    model = new Login('','');
    userId: number;
    message = '';

    constructor(
        private _accountUserService: AccountUserService,
        private _location: Location
    ){}

    onSubmit(form: NgForm) {
        this._accountUserService.postLogin(this.model)
            .then(result => {
                    if (!result) {
                        this.message = 'Det gick inte att logga in!';
                    }
                    else {
                        this.goBack();
                    }
                })
    }

    goBack(): void {
    this._location.back();
    }
}