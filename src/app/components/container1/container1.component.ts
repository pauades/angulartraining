import { Component, OnInit } from '@angular/core';
import { AppFacadeService } from 'src/app/services/facade/app-facade.service';
import { Person } from 'src/models/Person';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'app-container1',
    templateUrl: './container1.component.html',
    styleUrls: ['./container1.component.scss']
})
export class Container1Component implements OnInit {
    isImageVisible: boolean;
    persons: Person[];

    constructor(private appFacade: AppFacadeService) { }

    ngOnInit() {
        this.isImageVisible = true;
        this.persons=[];
        this.appFacade.getPersons$().subscribe(items => {
            this.persons = items;
            console.log(items);
        });
    }   

    visibilityChange($event) {
        this.isImageVisible = $event;
    }

    saveEventListener($event) {
        this.appFacade.addPerson($event);
    }

    updateEventListener($event) {        
        this.appFacade.updatePerson($event);
    }
}
