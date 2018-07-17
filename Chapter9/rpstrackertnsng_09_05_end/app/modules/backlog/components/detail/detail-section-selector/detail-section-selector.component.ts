import { Component, EventEmitter, Output, ChangeDetectionStrategy, Input } from '@angular/core';

import { DetailScreenType } from '../../../../../shared/models/ui/types';

@Component({
    moduleId: module.id,
    selector: 'pt-detail-section-selector',
    templateUrl: 'detail-section-selector.component.html',
    styleUrls: ['detail-section-selector.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailSectionSelectorComponent {

    @Input() selectedScreen: DetailScreenType = 'details';
    @Output() screenSelected = new EventEmitter<DetailScreenType>();

    public onDetailsTap(_args) {
        this.screenSelected.emit('details');
    }
    public onTasksTap(_args) {
        this.screenSelected.emit('tasks');
    }
    public onChitchatTap(_args) {
        this.screenSelected.emit('chitchat');
    }
}
