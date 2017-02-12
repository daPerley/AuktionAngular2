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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var auction_list_component_1 = require('./auctions/auction-list.component');
var auction_detail_component_1 = require('./auctions/auction-detail.component');
var account_login_component_1 = require('./accounts/account-login.component');
var account_logout_component_1 = require('./accounts/account-logout.component');
var account_create_component_1 = require('./accounts/account-create.component');
var auction_filter_pipe_1 = require('./auctions/auction-filter.pipe');
var category_filter_pipe_1 = require('./auctions/category-filter.pipe');
var auction_guard_service_1 = require('./auctions/auction-guard.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'auctions', component: auction_list_component_1.AuctionListComponent },
                    { path: 'auction/:supplierId/:auctionId', canActivate: [auction_guard_service_1.AuctionDetailGuard], component: auction_detail_component_1.AuctionDetailComponent },
                    { path: 'login', component: account_login_component_1.AccountLoginComponent },
                    { path: 'login/create', component: account_create_component_1.AccountCreateComponent },
                    { path: 'logout', component: account_logout_component_1.AccountLogoutComponent },
                    { path: '', redirectTo: 'auctions', pathMatch: 'full' }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                auction_list_component_1.AuctionListComponent,
                auction_detail_component_1.AuctionDetailComponent,
                account_login_component_1.AccountLoginComponent,
                account_logout_component_1.AccountLogoutComponent,
                account_create_component_1.AccountCreateComponent,
                auction_filter_pipe_1.AuctionFilterPipe,
                category_filter_pipe_1.CategoryFilterPipe
            ],
            providers: [auction_guard_service_1.AuctionDetailGuard],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map