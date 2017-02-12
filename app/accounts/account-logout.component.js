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
var account_user_service_1 = require('./account-user.service');
var AccountLogoutComponent = (function () {
    function AccountLogoutComponent(_accountUserService, location) {
        this._accountUserService = _accountUserService;
        this.location = location;
        this.title = 'Logga ut';
    }
    AccountLogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._accountUserService.getLogout()
            .then(function (result) { return _this.goBack(); });
    };
    AccountLogoutComponent.prototype.goBack = function () {
        this.location.back();
    };
    AccountLogoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n    <h1>{{title}}</h1>\n    ",
            styleUrls: ['./account.component.css']
        }), 
        __metadata('design:paramtypes', [account_user_service_1.AccountUserService, common_1.Location])
    ], AccountLogoutComponent);
    return AccountLogoutComponent;
}());
exports.AccountLogoutComponent = AccountLogoutComponent;
//# sourceMappingURL=account-logout.component.js.map