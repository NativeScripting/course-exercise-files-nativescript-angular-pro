import { Component } from '@angular/core';
import { PresetType } from '../../models/ui/types/presets';
import { NavigationService } from '../../../core/services';

@Component({
    moduleId: module.id,
    selector: 'pt-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent {
    constructor(
        private navigationService: NavigationService
    ) { }

    public onSelectPresetTap(preset: PresetType) {
        this.navigationService.navigate(['backlog', preset]);
    }
}
