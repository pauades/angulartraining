import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/models/Person';

@Component({
    selector: 'app-dumb1',
    templateUrl: './dumb1.component.html',
    styleUrls: ['./dumb1.component.scss']
})
export class Dumb1Component implements OnInit {

    @Input() isImageVisible: boolean;
    @Output() visibilityEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() save: EventEmitter<Person> = new EventEmitter<Person>();
    @Output() update: EventEmitter<Person> = new EventEmitter<Person>();

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

    updateEventListener($event){
        this.update.emit($event);
    }
}
