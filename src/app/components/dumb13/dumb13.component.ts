import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dumb13',
    templateUrl: './dumb13.component.html',
    styleUrls: ['./dumb13.component.scss']
})
export class Dumb13Component implements OnInit {

    @Output() save: EventEmitter<object> = new EventEmitter<object>();

    constructor() { }

    ngOnInit() {
    }

    btnSaveClick() {
        this.save.emit({name: "John", surname:"Doe", role:"Admin"})
    }

}
