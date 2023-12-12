import { inject, Injectable } from '@angular/core';
import { Actions, createRxEffect, mapResponse } from '@mini-rx/signal-store';
import { ofType } from 'ts-action-operators';
import { ProductApiService } from '../product-api.service';
import { mergeMap } from 'rxjs';
import { loadProducts, loadProductsError, loadProductsSuccess } from './product.actions';

@Injectable()
export class ProductEffects {
    actions$ = inject(Actions);
    todosApi = inject(ProductApiService);

    loadTodos$ = createRxEffect(
        this.actions$.pipe(
            ofType(loadProducts),
            mergeMap(() =>
                this.todosApi.getTodos().pipe(
                    mapResponse(
                        (res) => loadProductsSuccess(res),
                        (err) => loadProductsError,
                    ),
                ),
            ),
        ),
    );
}
