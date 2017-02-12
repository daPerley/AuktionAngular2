export interface IBid {
    id: number;
    auctionId: number;
    customerId: number;
    dateTime: Date;
    bidPrice: number; 
}

export class Bid {
    constructor(
        public auctionId: number,
        public customerId: number,
        public bidPrice: number
    ){}
}