import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { BacklogService } from '../../services/backlog.service';
import { Store } from '../../../../core/state/app-store';
import { PtItem } from '../../../../core/models/domain';
import { NavigationService } from '../../../../core/services/navigation.service';
import { AuthService } from '../../../../core/services';
import { PresetType } from '../../../../shared/models/ui/types/presets';

@Component({
    moduleId: module.id,
    selector: 'pt-backlog',
    templateUrl: 'backlog.page.component.html',
    styleUrls: ['backlog.page.component.css']
})
export class BacklogPageComponent implements OnInit {

    public items$ = this.store.select<PtItem[]>('backlogItems');
    public selectedPreset$: Observable<PresetType> = this.store.select<PresetType>('selectedPreset');

    constructor(
        private activatedRoute: ActivatedRoute,
        private authService: AuthService,
        private navigationService: NavigationService,
        private backlogService: BacklogService,
        private store: Store
    ) { }

    public ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            const reqPreset = params['preset'];
            if (reqPreset) {
                this.store.set('selectedPreset', reqPreset);
            }
        });

        this.selectedPreset$.subscribe(next => {
            this.backlogService.fetchItems();
        });
    }

    public selectListItem(item: PtItem) {
        // navigate to detail page
        this.navigationService.navigate(['/detail', item.id]);
    }

    public onLogoutTap() {
        this.authService.logout();
        this.navigationService.navigate(['/auth']);
    }

    public onAddTap(args) {
        // show add item dialog
    }
}
