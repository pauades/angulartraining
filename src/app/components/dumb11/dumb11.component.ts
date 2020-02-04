import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dumb11',
    templateUrl: './dumb11.component.html',
    styleUrls: ['./dumb11.component.scss']
})
export class Dumb11Component implements OnInit {

    @Output() show: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }


    ngOnInit() {
    }

    btnShowClick(event: any) {        
         this.show.emit(true);
    }

}

