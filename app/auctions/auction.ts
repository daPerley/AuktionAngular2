export interface IAuction {
    id: number;
    name: string;
    description: string;
    startTime: string;
    endTime: string;
    imageUrl: string;
    categoryId: number;
    supplierId: number;
    buyNowPrice: number;
    sold: boolean; 
}