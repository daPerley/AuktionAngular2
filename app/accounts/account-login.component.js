"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var login_1 = require('./login');
var account_user_service_1 = require('./account-user.service');
var AccountLoginComponent = (function () {
    function AccountLoginComponent(_accountUserService, _location) {
        this._accountUserService = _accountUserService;
        this._location = _location;
        this.title = 'Logga in';
        this.model = new login_1.Login('', '');
        this.message = '';
    }
    AccountLoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this._accountUserService.postLogin(this.model)
            .then(function (result) {
            if (!result) {
                _this.message = 'Det gick inte att logga in!';
            }
            else {
                _this.goBack();
            }
        });
    };
    AccountLoginComponent.prototype.goBack = function () {
        this._location.back();
    };
    AccountLoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './account-login.component.html',
            styleUrls: ['./account.component.css']
        }), 
        __metadata('design:paramtypes', [account_user_service_1.AccountUserService, common_1.Location])
    ], AccountLoginComponent);
    return AccountLoginComponent;
}());
exports.AccountLoginComponent = AccountLoginComponent;
//# sourceMappingURL=account-login.component.js.map