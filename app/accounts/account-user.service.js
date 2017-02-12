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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/rx');
require('rxjs/add/operator/toPromise');
var AccountUserService = (function () {
    function AccountUserService(_http) {
        this._http = _http;
        this._loginUrl = 'http://nackademiskasecure.azurewebsites.net/api/account/login';
        this._logoutUrl = 'http://nackademiskasecure.azurewebsites.net/api/account/logout';
        this._buyNowUrl = 'http://nackademiskasecure.azurewebsites.net/api/auction/buynow';
        this._bidUrl = 'http://nackademiskasecure.azurewebsites.net/api/bid';
        this._customerUrl = 'http://nackademiskasecure.azurewebsites.net/api/customer';
    }
    AccountUserService.prototype.isLoggedIn = function () {
        return (this.customerId != null);
    };
    AccountUserService.prototype.getCustomer = function (customerId) {
        return __awaiter(this, void 0, Promise, function* () {
            var url = this._customerUrl + "/" + customerId;
            var response = yield this._http.get(url).toPromise();
            return response.json();
        });
    };
    AccountUserService.prototype.postNewCostumer = function (account) {
        return __awaiter(this, void 0, Promise, function* () {
            yield this._http.post(this._customerUrl, account).toPromise();
            return true;
        });
    };
    AccountUserService.prototype.postLogin = function (login) {
        return __awaiter(this, void 0, Promise, function* () {
            var _this = this;
            return yield this._http.post(this._loginUrl, login, { withCredentials: true })
                .toPromise()
                .then(function (response) {
                _this.getCustomer(response.json().id).then(function (customer) {
                    _this.customerId = response.json().id;
                });
                return true;
            })
                .catch(this.handleError);
        });
    };
    AccountUserService.prototype.getLogout = function () {
        return __awaiter(this, void 0, Promise, function* () {
            var response = yield this._http.get(this._logoutUrl).toPromise();
            return true;
        });
    };
    AccountUserService.prototype.postBuyNow = function (buyNow) {
        return __awaiter(this, void 0, Promise, function* () {
            buyNow.customerId = yield this.customerId;
            var response = yield this._http.post(this._buyNowUrl, buyNow, { withCredentials: true }).toPromise();
            return true;
        });
    };
    AccountUserService.prototype.postPlaceBid = function (bid) {
        return __awaiter(this, void 0, Promise, function* () {
            bid.customerId = yield this.customerId;
            return yield this._http.post(this._bidUrl, bid, { withCredentials: true }).toPromise()
                .catch(this.handleError);
        });
    };
    AccountUserService.prototype.handleError = function (error) {
        console.error('post error: ', error);
        return Promise.reject(error.message || error);
    };
    AccountUserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AccountUserService);
    return AccountUserService;
}());
exports.AccountUserService = AccountUserService;
//# sourceMappingURL=account-user.service.js.map