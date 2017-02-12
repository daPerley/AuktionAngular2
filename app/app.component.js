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
var auction_service_1 = require('./auctions/auction.service');
var account_user_service_1 = require('./accounts/account-user.service');
var AppComponent = (function () {
    function AppComponent(_accountUserService) {
        this._accountUserService = _accountUserService;
        this.title = 'Nackademiska Auktionsfrämjandet';
    }
    AppComponent.prototype.ngDoCheck = function () {
        this.isLoggedIn = this._accountUserService.isLoggedIn();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'am-app',
            moduleId: module.id,
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [
                auction_service_1.AuctionService,
                account_user_service_1.AccountUserService
            ]
        }), 
        __metadata('design:paramtypes', [account_user_service_1.AccountUserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map