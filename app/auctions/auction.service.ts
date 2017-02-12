import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { IAuction } from './auction';
import { IBid } from './bid';
import { ICategory } from './category';
import { ISupplier } from './supplier';

@Injectable()

export class AuctionService {
    private _auctionUrl = 'http://nackademiskasecure.azurewebsites.net/api/auction';
    private _auctionBidUrl = 'http://nackademiskasecure.azurewebsites.net/api/bid';
    private _categoryUrl = 'http://nackademiskasecure.azurewebsites.net/api/category';
    private _supplierUrl = 'http://nackademiskasecure.azurewebsites.net/api/supplier';

    private _dummyDataAuctionUrl = '../api/auctions/auction.json';
    private _dummyDataCategoryUrl = '../api/auctions/category.json';
    private _dummyDataSupplierUrl = '../api/auctions/supplier.json';

    constructor(private _http: Http) {}

    async getAuctions(): Promise<IAuction[]> {
        const response = await this._http.get(this._auctionUrl).toPromise();
        return response.json();
    }

    async getAuction(id: number): Promise<IAuction>{
        const url = `${this._auctionUrl}/${id}`;

        const response = await this._http.get(url).toPromise();
        return response.json();
    }

    async getBidsForAuction(id: number): Promise<IBid[]>{
        const url = `${this._auctionBidUrl}/${id}`;

        const response = await this._http.get(url).toPromise();
        return response.json();
    }

    async getCategories(): Promise<ICategory[]> {
        const response = await this._http.get(this._categoryUrl).toPromise();
        return response.json();
    }

    async getSuppliers(): Promise<ISupplier[]> {
        const response = await this._http.get(this._supplierUrl).toPromise();
        return response.json();
    }

    async getSupplier(id: number): Promise<ISupplier>{
        const url = `${this._supplierUrl}/${id}`;

        const response = await this._http.get(url).toPromise();
        return response.json();
    }

    private handleError(error: any): Promise<any>{
        console.error(error);
        return Promise.reject(error.message || error);
    }
}