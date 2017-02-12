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
var router_1 = require('@angular/router');
var auction_service_1 = require('./auction.service');
var AuctionListComponent = (function () {
    function AuctionListComponent(_auctionService, _router) {
        this._auctionService = _auctionService;
        this._router = _router;
        this.title = "Pågående auktioner";
        this.categoryFilter = null;
    }
    AuctionListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.auctions = yield this._auctionService.getAuctions();
            this.categories = yield this._auctionService.getCategories();
        });
    };
    AuctionListComponent.prototype.onSelect = function (auction) {
        this._router.navigate(['/auction', auction.supplierId, auction.id]);
    };
    AuctionListComponent.prototype.errorMessage = function (error) {
        return;
    };
    AuctionListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './auction-list.component.html',
            styleUrls: ['./auction-list.component.css']
        }), 
        __metadata('design:paramtypes', [auction_service_1.AuctionService, router_1.Router])
    ], AuctionListComponent);
    return AuctionListComponent;
}());
exports.AuctionListComponent = AuctionListComponent;
//# sourceMappingURL=auction-list.component.js.map