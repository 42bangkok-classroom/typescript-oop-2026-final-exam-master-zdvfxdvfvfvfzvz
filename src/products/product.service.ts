import { Injectable } from '@nestjs/common';
import * as products from '../../data/products.json';

@Injectable()
export class ProductService {
    findAll() {
        return products;
    }
}