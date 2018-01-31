import { NewItemFormComponent } from './new-item-form/new-item-form.component';
import { PtListComponent, PtListItemComponent } from './backlog';
import { PtItemDetailsComponent } from './detail/item-details/pt-item-details.component';


export * from './backlog';
export * from './new-item-form/new-item-form.component';
export * from './detail/item-details/pt-item-details.component';

export const COMPONENTS = [
    NewItemFormComponent,
    PtItemDetailsComponent,
    PtListComponent,
    PtListItemComponent
];


