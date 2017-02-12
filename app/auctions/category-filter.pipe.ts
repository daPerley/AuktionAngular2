import { Pipe, PipeTransform } from '@angular/core';

import { ICategory } from './category'

@Pipe({
    name: 'categoryFilter'
})

export class CategoryFilterPipe implements PipeTransform {
    transform(value: ICategory[], filterBy: number): ICategory[] {
        return filterBy ? value.filter((category: ICategory) => category.id === filterBy) : value;
    }
}