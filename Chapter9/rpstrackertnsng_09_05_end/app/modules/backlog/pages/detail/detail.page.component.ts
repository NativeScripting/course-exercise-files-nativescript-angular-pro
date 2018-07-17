import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import * as dialogs from 'ui/dialogs';

import { PtItem, PtUser } from '../../../../core/models/domain';
import { BacklogService } from '../../services/backlog.service';
import { PtUserService, NavigationService } from '../../../../core/services';
import { Store } from '../../../../core/state/app-store';
import { PtModalService } from '../../../../shared/modals/pt-modal.service';
import { TextInputModalComponent } from '../../../../shared/modals/text-input/text-input.modal.component';
import { PtNewTask, PtNewComment, PtTaskUpdate } from '../../../../shared/models/dto';
import { DetailScreenType } from '../../../../shared/models/ui/types';


@Component({
    moduleId: module.id,
    selector: 'pt-backlog-detail-page',
    templateUrl: 'detail.page.component.html',
    styleUrls: ['detail.page.component.css']
})
export class DetailPageComponent implements OnInit {

    public selectedDetailsScreen: DetailScreenType = 'details';
    public currentSelectedItem$: Observable<PtItem> = this.store.select<PtItem>('currentSelectedItem');
    public users$: Observable<PtUser[]> = this.store.select<PtUser[]>('users');
    public currentUser$: Observable<PtUser> = this.store.select<PtUser>('currentUser');

    constructor(
        private activatedRoute: ActivatedRoute,
        private backlogService: BacklogService,
        private ptUserService: PtUserService,
        private navigationService: NavigationService,
        private store: Store
    ) { }

    public ngOnInit() {
        this.backlogService.getItemFromCacheOrServer(parseInt(this.activatedRoute.snapshot.params['id']));
    }

    public onDeleteTap() {
        const options: dialogs.ConfirmOptions = {
            title: 'Delete Item',
            message: 'Are you sure you want to delete this item?',
            okButtonText: 'Yes',
            cancelButtonText: 'Cancel'
        };
        dialogs.confirm(options)
            .then((result: boolean) => {
                // result can be true/false/undefined
                if (result) {
                    this.backlogService.deletePtItem(this.store.value.currentSelectedItem);
                    setTimeout(() => {
                        this.navigationService.backToPreviousPage();
                    }, 100);
                }
            });
    }

    public onScreenSelected(screen: DetailScreenType) {
        this.selectedDetailsScreen = screen;
    }

    public onUsersRequested() {
        this.ptUserService.fetchUsers();
    }

    public onAddNewTask(newTask: PtNewTask) {
        this.backlogService.addNewPtTask(newTask, this.store.value.currentSelectedItem);
    }

    public onUpdateTask(taskUpdate: PtTaskUpdate) {
        this.backlogService.updatePtTask(this.store.value.currentSelectedItem, taskUpdate.task, taskUpdate.toggle, taskUpdate.newTitle);
    }

    public onAddNewComment(newComment: PtNewComment) {
        this.backlogService.addNewPtComment(newComment, this.store.value.currentSelectedItem);
    }

    public onItemSaved(item: PtItem) {
        this.backlogService.updatePtItem(item);
    }

    public onNavBackTap() {
        this.navigationService.backToPreviousPage();
    }

}
