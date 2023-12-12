import { Component, inject, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@mini-rx/signal-store';
import { Product } from '../models';
import { getProducts } from '../state';
import { deleteProduct, loadProducts } from '../state/product.actions';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-shell.component.html',
    styleUrl: './product-shell.component.scss',
})
export class ProductShellComponent implements OnInit {
    private store = inject(Store);
    products: Signal<Product[]> = this.store.select(getProducts);

    ngOnInit() {
        this.store.dispatch(loadProducts());
    }

    deleteProduct(todo: Product) {
        this.store.dispatch(deleteProduct({ id: todo.id }));
    }
}
