import { Pipe, PipeTransform } from '@angular/core';

import { IAuction } from './auction';

@Pipe({
    name: 'auctionFilter'
})

export class AuctionFilterPipe implements PipeTransform {
    private today = new Date().getTime()

    transform(value: IAuction[], category: number, filterBy: string): IAuction[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        category = category ? category : null;

        let active = value.filter((auction: IAuction) => new Date(auction.startTime).getTime() < this.today
        && new Date(auction.endTime).getTime() > this.today
        && auction.sold === false);

        let byString = filterBy ? active.filter((auction: IAuction) => 
        auction.name.toLocaleLowerCase().indexOf(filterBy) !== -1) 
        : active;

        return category ? byString.filter((auction: IAuction) => auction.categoryId === category) : byString;
    }
}