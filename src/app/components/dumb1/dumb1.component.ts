import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dumb1',
    templateUrl: './dumb1.component.html',
    styleUrls: ['./dumb1.component.scss']
})
export class Dumb1Component implements OnInit {

    @Input() isImageVisible: boolean;

    constructor() { }

    ngOnInit() {
    }

}
