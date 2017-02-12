import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AuctionListComponent } from './auctions/auction-list.component';
import { AuctionDetailComponent } from './auctions/auction-detail.component';
import { AccountLoginComponent } from './accounts/account-login.component';
import { AccountLogoutComponent } from './accounts/account-logout.component';
import { AccountCreateComponent } from './accounts/account-create.component';
import { AuctionFilterPipe } from './auctions/auction-filter.pipe';
import { CategoryFilterPipe } from './auctions/category-filter.pipe';
import { AuctionDetailGuard } from './auctions/auction-guard.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'auctions', component: AuctionListComponent },
      { path: 'auction/:supplierId/:auctionId', canActivate: [AuctionDetailGuard], component: AuctionDetailComponent },
      { path: 'login', component: AccountLoginComponent },
      { path: 'login/create', component: AccountCreateComponent },
      { path: 'logout', component: AccountLogoutComponent },
      { path: '', redirectTo: 'auctions', pathMatch: 'full' }
    ])
     ],
  declarations: [ 
    AppComponent,
    AuctionListComponent,
    AuctionDetailComponent,
    AccountLoginComponent,
    AccountLogoutComponent,
    AccountCreateComponent,
    AuctionFilterPipe,
    CategoryFilterPipe
    ],
    providers: [ AuctionDetailGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
