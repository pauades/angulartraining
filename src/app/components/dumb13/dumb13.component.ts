import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/models/Person';

@Component({
    selector: 'app-dumb13',
    templateUrl: './dumb13.component.html',
    styleUrls: ['./dumb13.component.scss']
})
export class Dumb13Component implements OnInit {

    @Output() save: EventEmitter<Person> = new EventEmitter<Person>();
    @Output() update: EventEmitter<Person> = new EventEmitter<Person>();


    personToAdd: Person = new Person();
    personToEdit: Person = new Person();

    constructor() { }

    ngOnInit() {
        
    }

    btnSaveClick() {
        this.save.emit(this.personToAdd);
    }

    btnUpdateClick(){
        this.update.emit(this.personToEdit);
    }

}
