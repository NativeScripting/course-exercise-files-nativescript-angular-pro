import { PtListComponent, PtListItemComponent } from './backlog';
import { PtItemDetailsComponent } from './detail/item-details/pt-item-details.component';
import { PtItemChitchatComponent } from './detail/item-chitchat/pt-item-chitchat.component';
import { PtItemTasksComponent } from './detail/item-tasks/pt-item-tasks.component';
import { NewItemFormComponent } from './new-item-form/new-item-form.component';
import { DetailSectionSelectorComponent } from './detail/detail-section-selector/detail-section-selector.component';

export * from './backlog';
export * from './detail/item-details/pt-item-details.component';
export * from './detail/item-chitchat/pt-item-chitchat.component';
export * from './detail/item-tasks/pt-item-tasks.component';
export * from './new-item-form/new-item-form.component';
export * from './detail/detail-section-selector/detail-section-selector.component';

export const COMPONENTS = [
    DetailSectionSelectorComponent,
    NewItemFormComponent,
    PtItemChitchatComponent,
    PtItemDetailsComponent,
    PtListComponent,
    PtListItemComponent,
    PtItemTasksComponent
];


