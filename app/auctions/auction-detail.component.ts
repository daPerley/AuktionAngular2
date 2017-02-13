import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IAuction } from './auction';
import { Account } from '../accounts/account';
import { IBid, Bid } from './bid';
import { BuyNow } from './buy-now';
import { ICategory } from './category';
import { ISupplier } from './supplier';
import { AuctionService } from './auction.service';
import { AccountUserService } from '../accounts/account-user.service';

@Component({
    moduleId: module.id,
    templateUrl: './auction-detail.component.html',
    styleUrls: ['./auction-detail.component.css']
})

export class AuctionDetailComponent implements OnInit{
    title = 'Detaljer'
    message: string = '';
    auction: IAuction;
    categories: ICategory[];
    supplier: ISupplier;
    bids: IBid[];
    highestBid: number;
    currentUser: Account;
    model = new Bid(null, null, null);
    
    constructor(
        private _auctionService: AuctionService,
        private _accountUserService: AccountUserService,
        private _route: ActivatedRoute,
        private _router: Router
    ){ }

    async ngOnInit() {
        let id = +this._route.snapshot.params['auctionId'];
        let supplierId = +this._route.snapshot.params['supplierId'];

        this.auction = await this._auctionService.getAuction(id);

        this.categories = await this._auctionService.getCategories();

        this.supplier  = await this._auctionService.getSupplier(supplierId);

        this.getBids(this.auction.id);
    }

    onBack(): void {
        this._router.navigate(['/auctions']);
    }

    onBuyNow(auction: IAuction) {
        if(this._accountUserService.isLoggedIn()){
            let buyNow = new BuyNow(auction.id, null);

            this._accountUserService.postBuyNow(buyNow)
                .then(
                    result => {
                        if (!result) {
                            this.message = 'Något gick visst fel!';
                        }
                        else {
                            this.message = 'Grattis, du äger nu' + auction.name;
                            console.log(result);
                        }
                    });
            } else {
                this._router.navigate(['/login']);
            }
    }

    onPlaceBid(form: NgForm, auction: IAuction) {
        if(this._accountUserService.isLoggedIn()){      
            let bid = new Bid(auction.id, null, this.model.bidPrice);

            this._accountUserService.postPlaceBid(bid)
            .then(
                result => {
                    if (!result) {
                        this.message = 'Något gick visst fel!';
                    }
                    else {
                        this.getBids(auction.id);
                        this.message = 'Ditt bud är lagt!';
                        console.log(result);
                    }
                });
            } else {
                this._router.navigate(['/login']);
            }
    }

    async getBids(id: number) {
        this.bids = await this._auctionService.getBidsForAuction(id);

        this.bids.reverse();

        this.highestBid = await this.bids[0].bidPrice + 1;
    }

    private errorMessage(error: any) {
        return;
    }
}