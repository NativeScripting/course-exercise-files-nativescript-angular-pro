import { ViewContainerRef } from '@angular/core';

export interface PtModalContext<T, R> {
    vcRef: ViewContainerRef;
    title: string;
    payload: T;
    defaultResult: R;
    btnOkText: string;
    btnCancelText: string;
}
