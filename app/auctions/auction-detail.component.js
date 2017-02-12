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
var bid_1 = require('./bid');
var buy_now_1 = require('./buy-now');
var auction_service_1 = require('./auction.service');
var account_user_service_1 = require('../accounts/account-user.service');
var AuctionDetailComponent = (function () {
    function AuctionDetailComponent(_auctionService, _accountUserService, _route, _router) {
        this._auctionService = _auctionService;
        this._accountUserService = _accountUserService;
        this._route = _route;
        this._router = _router;
        this.title = 'Detaljer';
        this.message = '';
        this.model = new bid_1.Bid(null, null, null);
    }
    AuctionDetailComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function* () {
            var id = +this._route.snapshot.params['auctionId'];
            var supplierId = +this._route.snapshot.params['supplierId'];
            this.auction = yield this._auctionService.getAuction(id);
            this.categories = yield this._auctionService.getCategories();
            this.supplier = yield this._auctionService.getSupplier(supplierId);
            this.bids = yield this._auctionService.getBidsForAuction(id);
            this.bids.reverse();
            this.highestBid = this.bids[0].bidPrice;
        });
    };
    AuctionDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/auctions']);
    };
    AuctionDetailComponent.prototype.onBuyNow = function (auction) {
        var _this = this;
        if (this._accountUserService.isLoggedIn()) {
            var buyNow = new buy_now_1.BuyNow(auction.id, null);
            this._accountUserService.postBuyNow(buyNow)
                .then(function (result) {
                if (!result) {
                    _this.message = 'Något gick visst fel!';
                }
                else {
                    _this.message = 'Grattis, du äger nu' + auction.name;
                    console.log(result);
                }
            });
        }
        else {
            this._router.navigate(['/login']);
        }
    };
    AuctionDetailComponent.prototype.onPlaceBid = function (form, auction) {
        var _this = this;
        if (this._accountUserService.isLoggedIn()) {
            var bid = new bid_1.Bid(auction.id, null, this.model.bidPrice);
            this._accountUserService.postPlaceBid(bid)
                .then(function (result) {
                if (!result) {
                    _this.message = 'Något gick visst fel!';
                }
                else {
                    _this.message = 'Ditt bud är lagt!';
                    console.log(result);
                }
            });
        }
        else {
            this._router.navigate(['/login']);
        }
    };
    AuctionDetailComponent.prototype.errorMessage = function (error) {
        return;
    };
    AuctionDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './auction-detail.component.html',
            styleUrls: ['./auction-detail.component.css']
        }), 
        __metadata('design:paramtypes', [auction_service_1.AuctionService, account_user_service_1.AccountUserService, router_1.ActivatedRoute, router_1.Router])
    ], AuctionDetailComponent);
    return AuctionDetailComponent;
}());
exports.AuctionDetailComponent = AuctionDetailComponent;
//# sourceMappingURL=auction-detail.component.js.map