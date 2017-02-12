import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { Account } from './account';

import { AccountUserService } from './account-user.service';

@Component({
    moduleId: module.id,
    templateUrl: './account-create.component.html',
    styleUrls: ['./account.component.css']
})

export class AccountCreateComponent {
    title = 'Skapa konto';
    model = new Account('','','','','','','','');
    message = '';

    constructor(
        private _accountUserService: AccountUserService,
        private _location: Location
        ){}

    onSubmit(form: NgForm) {
        this._accountUserService.postNewCostumer(this.model)
            .then(result => {
                    if (!result) {
                        this.message = 'Det gick inte att logga in!';
                    }
                    else {
                        this.goBack();
                    }
                });
    }

    goBack(): void {
    this._location.back();
    }
}