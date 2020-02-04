import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dumb1',
    templateUrl: './dumb1.component.html',
    styleUrls: ['./dumb1.component.scss']
})
export class Dumb1Component implements OnInit {

    @Input() isImageVisible: boolean;
    @Output() visibilityEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() save: EventEmitter<object> = new EventEmitter<object>();

    constructor() { }

    ngOnInit() {
    }

    visibilityChange($event){
        //this.isImageVisible = $event;
        this.visibilityEvent.emit($event);
    } 

    saveEventListener($event){
        this.save.emit($event);
    }
}
