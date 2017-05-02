import { Component } from '@angular/core';

@Component({
    selector : 'collapsible-well',
    template : `
        <div (click)="toggleContent()" class="well pointable">
            <h4>
                <ng-content select=".title"></ng-content>
            </h4>
            <ng-content *ngIf="visable" select=".body"></ng-content>
        </div>
    `
})

export class CollapsibleWellComponent{
    visable: boolean  =  false;

    toggleContent() {
        this.visable = !this.visable

    }
}