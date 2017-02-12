import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/rx';
import 'rxjs/add/operator/toPromise';

import { Account } from './account';
import { Login } from './login';
import { BuyNow } from '../auctions/buy-now';
import { IBid, Bid } from '../auctions/bid';

@Injectable()

export class AccountUserService {
    private _loginUrl = 'http://nackademiskasecure.azurewebsites.net/api/account/login';
    private _logoutUrl = 'http://nackademiskasecure.azurewebsites.net/api/account/logout';
    private _buyNowUrl = 'http://nackademiskasecure.azurewebsites.net/api/auction/buynow';
    private _bidUrl = 'http://nackademiskasecure.azurewebsites.net/api/bid';
    private _customerUrl = 'http://nackademiskasecure.azurewebsites.net/api/customer';
    
    customerId: number;

    constructor(private _http: Http){}

    isLoggedIn(): boolean {
    return (this.customerId != null)
    }

    async getCustomer(customerId: number): Promise<Account> {
        const url = `${this._customerUrl}/${customerId}`;

        const response = await this._http.get(url).toPromise();
        return response.json();
    }

    async postNewCostumer(account: Account): Promise<any> {
        await this._http.post(this._customerUrl, account).toPromise();
        return true;
    }

    async postLogin(login: Login):Promise<any> {
        return await this._http.post(this._loginUrl, login, {withCredentials: true})
        .toPromise()
        .then(response => {
                      this.getCustomer(response.json().id).then(customer =>{
                        this.customerId = response.json().id;
                      });
                      return true;
                    })
        .catch(this.handleError);
    }

    async getLogout():Promise<any> {
        const response = await this._http.get(this._logoutUrl).toPromise();
        return true;
    }

    async postBuyNow(buyNow: BuyNow):Promise<any> {
        buyNow.customerId = await this.customerId;

        const response = await this._http.post(this._buyNowUrl, buyNow, {withCredentials: true}).toPromise();
        return true;
    }

    async postPlaceBid(bid: Bid):Promise<any> {
        bid.customerId = await this.customerId;

        return await this._http.post(this._bidUrl, bid, {withCredentials: true}).toPromise()
        .catch(this.handleError);  
    }

    private handleError(error: any): Promise<any> {
        console.error('post error: ', error);

        return Promise.reject(error.message || error);
    }
}