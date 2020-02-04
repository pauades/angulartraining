import { Component, OnInit } from '@angular/core';
import { AppFacadeService } from 'src/app/services/facade/app-facade.service';
import { CashflowCategory } from 'src/models/CashflowCategory';

@Component({
    selector: 'app-container1',
    templateUrl: './container1.component.html',
    styleUrls: ['./container1.component.scss']
})
export class Container1Component implements OnInit {

    isImageVisible: boolean;

    constructor(private appFacade: AppFacadeService) { }

    ngOnInit() {
        this.isImageVisible = true;
    }

    visibilityChange($event){
        this.isImageVisible = $event;
    }

    saveEventListener($event){
        this.appFacade.addCashflowCategory({id: 1, name: "John"});
        console.log($event);
    }

}
