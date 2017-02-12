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
var AuctionFilterPipe = (function () {
    function AuctionFilterPipe() {
        this.today = new Date().getTime();
    }
    AuctionFilterPipe.prototype.transform = function (value, category, filterBy) {
        var _this = this;
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        category = category ? category : null;
        var active = value.filter(function (auction) { return new Date(auction.startTime).getTime() < _this.today
            && new Date(auction.endTime).getTime() > _this.today
            && auction.sold === false; });
        var byString = filterBy ? active.filter(function (auction) {
            return auction.name.toLocaleLowerCase().indexOf(filterBy) !== -1;
        })
            : active;
        return category ? byString.filter(function (auction) { return auction.categoryId === category; }) : byString;
    };
    AuctionFilterPipe = __decorate([
        core_1.Pipe({
            name: 'auctionFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], AuctionFilterPipe);
    return AuctionFilterPipe;
}());
exports.AuctionFilterPipe = AuctionFilterPipe;
//# sourceMappingURL=auction-filter.pipe.js.map