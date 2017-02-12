import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { IAuction } from './auction';
import { ICategory } from './category';
import { AuctionService } from './auction.service';

@Component({
    moduleId: module.id,
    templateUrl: './auction-list.component.html',
    styleUrls: ['./auction-list.component.css']
})

export class AuctionListComponent implements OnInit{
    title = "Pågående auktioner";
    listFilter: string;
    categoryFilter: any = null;
    auctions: IAuction[];
    categories: ICategory[];

    constructor(
        private _auctionService: AuctionService,
        private _router: Router
        ) {}

    async ngOnInit() {
        this.auctions = await this._auctionService.getAuctions();

        this.categories = await this._auctionService.getCategories();
    }

    onSelect(auction: IAuction): void{
        this._router.navigate(['/auction', auction.supplierId, auction.id]);
    }

    private errorMessage(error: any) {
        return;
    }
}