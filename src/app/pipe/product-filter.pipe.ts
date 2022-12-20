import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], term: string): Product[] {
    if(term === undefined) return products;
    return products.filter(function(product){
      return product.title.toLocaleLowerCase().includes(term.toLocaleLowerCase());
    });
  }

}
