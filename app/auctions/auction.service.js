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
require('rxjs/add/operator/toPromise');
var AuctionService = (function () {
    function AuctionService(_http) {
        this._http = _http;
        this._auctionUrl = 'http://nackademiskasecure.azurewebsites.net/api/auction';
        this._auctionBidUrl = 'http://nackademiskasecure.azurewebsites.net/api/bid';
        this._categoryUrl = 'http://nackademiskasecure.azurewebsites.net/api/category';
        this._supplierUrl = 'http://nackademiskasecure.azurewebsites.net/api/supplier';
        this._dummyDataAuctionUrl = '../api/auctions/auction.json';
        this._dummyDataCategoryUrl = '../api/auctions/category.json';
        this._dummyDataSupplierUrl = '../api/auctions/supplier.json';
    }
    AuctionService.prototype.getAuctions = function () {
        return __awaiter(this, void 0, Promise, function* () {
            var response = yield this._http.get(this._auctionUrl).toPromise();
            return response.json();
        });
    };
    AuctionService.prototype.getAuction = function (id) {
        return __awaiter(this, void 0, Promise, function* () {
            var url = this._auctionUrl + "/" + id;
            var response = yield this._http.get(url).toPromise();
            return response.json();
        });
    };
    AuctionService.prototype.getBidsForAuction = function (id) {
        return __awaiter(this, void 0, Promise, function* () {
            var url = this._auctionBidUrl + "/" + id;
            var response = yield this._http.get(url).toPromise();
            return response.json();
        });
    };
    AuctionService.prototype.getCategories = function () {
        return __awaiter(this, void 0, Promise, function* () {
            var response = yield this._http.get(this._categoryUrl).toPromise();
            return response.json();
        });
    };
    AuctionService.prototype.getSuppliers = function () {
        return __awaiter(this, void 0, Promise, function* () {
            var response = yield this._http.get(this._supplierUrl).toPromise();
            return response.json();
        });
    };
    AuctionService.prototype.getSupplier = function (id) {
        return __awaiter(this, void 0, Promise, function* () {
            var url = this._supplierUrl + "/" + id;
            var response = yield this._http.get(url).toPromise();
            return response.json();
        });
    };
    AuctionService.prototype.handleError = function (error) {
        console.error(error);
        return Promise.reject(error.message || error);
    };
    AuctionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuctionService);
    return AuctionService;
}());
exports.AuctionService = AuctionService;
//# sourceMappingURL=auction.service.js.map