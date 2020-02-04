import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dumb12',
    templateUrl: './dumb12.component.html',
    styleUrls: ['./dumb12.component.scss']
})
export class Dumb12Component implements OnInit {

    @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor() { }

    ngOnInit() {
    }

    btnHideClick(event: any) {
        this.hide.emit(false);
    }
}
