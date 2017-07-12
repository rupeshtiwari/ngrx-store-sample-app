import { Component, Input, OnInit, ChangeDetectionStrategy, 
    OnChanges, AfterViewInit, ElementRef,
     ViewChild, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TreeEvents } from 'app/tree/tree-events';
import { SourceType } from 'app/core/models/tree';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'app-tree-node',
    template: `
    <div *ngIf="node" #treeNode>
        <div  [ngClass]="{'selected':selected,'focused':focused}" >
            <span *ngIf="showExpandButton">+</span>
            <span *ngIf="showCollapseButton">-</span>
            <span   role="treeitem"
                    appAutoFocus
                    [focus]="focused"
                    [attr.aria-hidden]="!expanded"
                    [attr.aria-expanded]="expanded"
                    [attr.aria-selected]="focused"
                    [attr.aria-label]="title"
                    [attr.aria-level]="level"
                    [attr.tabindex]="tabIndex"
                    [attr.title]="title">
                {{title}}
            </span>
        </div>
        <app-tree-node-list role="group" [nodes]="allChildren" *ngIf="canShowChildren">
        </app-tree-node-list>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
    , styles: [`
        .selected {background-color: yellow}
        .focused { outline: 1px dashed red; }
        :focus {outline:none}
        `]
})

export class TreeNodeComponent implements OnDestroy, AfterViewInit {
    @Input() node;
    click$: Subscription;
    @ViewChild('treeNode') treeNode: ElementRef;
    constructor(private treeEvents: TreeEvents) {
    }

    toggle(event: KeyboardEvent) {
        event.stopPropagation();
        const path = this.node.path;
        const hasChildrens = this.hasChildrens;
        if (this.expanded) {
            this.treeEvents.selectCollapse({ path });
        } else {
            this.treeEvents.selectExpand({ path, hasChildrens });
        }
    }

    ngAfterViewInit() {
        this.click$ = Observable.fromEvent<KeyboardEvent>(this.treeNode.nativeElement, 'click')
            .subscribe(this.toggle.bind(this));
    }
    ngOnDestroy() {
        this.click$.unsubscribe();
    }
    get level() {
        return this.node.level;
    }
    get tabIndex() {
        return this.node.tabIndex;
    }
    get selected() {
        return this.node.selected;
    }
    get title() {
        return this.node.title;
    }
    get treeNodes() {
        return Observable.of(this.node.nodes);
    }
    get expanded() {
        return this.node.expanded;
    }
    get focused() {
        return this.node.focused;
    }
    get hasChildrens() {
        return this.node.nodes.length > 0;
    }
    get showExpandButton() {
        return !this.node.expanded && this.node.type === SourceType.FOLDER;
    }
    get showCollapseButton() {
        return this.node.expanded && this.node.type === SourceType.FOLDER;
    }
    get canShowChildren() {
        return this.hasChildrens && this.expanded;
    }
    get allChildren() {
        return this.node.nodes;
    }
}

