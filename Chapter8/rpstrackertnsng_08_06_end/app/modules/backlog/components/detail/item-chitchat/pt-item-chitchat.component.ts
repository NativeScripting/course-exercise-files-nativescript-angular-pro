import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, ViewContainerRef } from '@angular/core';

import { isIOS } from 'platform';
import { TextField } from 'ui/text-field';

import { PtItem, PtComment, PtUser } from '../../../../../core/models/domain';
import { PtNewComment } from '../../../../../shared/models/dto';
import { EMPTY_STRING } from '../../../../../core/helpers/string-helpers';
import { PtModalService } from '../../../../../shared/modals/pt-modal.service';
import { TextInputModalComponent } from '../../../../../shared/modals/text-input/text-input.modal.component';

@Component({
    moduleId: module.id,
    selector: 'pt-item-chitchat',
    templateUrl: 'pt-item-chitchat.component.html',
    styleUrls: ['pt-item-chitchat.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PtItemChitchatComponent {
    @Input() public set item(val: PtItem) {
        this.comments = val.comments;
    }
    @Input() public currentUser: PtUser;
    @Output() addNewComment = new EventEmitter<PtNewComment>();

    public get currentUserAvatar() {
        return this.currentUser.avatar;
    }

    public comments: PtComment[] = [];
    public newCommentText = EMPTY_STRING;

    constructor(
        private ptModalService: PtModalService,
        private vcRef: ViewContainerRef
    ) { }

    public onAddTapped(newCommentTextField: TextField, _args) {
        const newTitle = this.newCommentText.trim();
        if (newTitle.length === 0) {
            return;
        }
        const newComment: PtNewComment = {
            title: newTitle
        };
        this.addNewComment.emit(newComment);
        this.newCommentText = EMPTY_STRING;
        newCommentTextField.dismissSoftInput();
    }

    public onTextFieldTap() {
        const ctx =
            this.ptModalService.createPtModalContext<string, string>(
                this.vcRef,
                'Comment',
                ''
            );

        this.ptModalService.createModal(TextInputModalComponent, ctx)
            .then(result => {
                if (result) {
                    const newComment: PtNewComment = {
                        title: result
                    };
                    this.addNewComment.emit(newComment);
                    this.newCommentText = EMPTY_STRING;
                }
            });
    }

    public commentHeight(commentTitle: string) {
        const lineHeight = isIOS ? 20 : 30;
        const numlines = Math.ceil(commentTitle.length / 22);
        return ((numlines < 2 ? 2 : numlines) * lineHeight) + 10;
    }

}
