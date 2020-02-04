import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-image-holder',
    templateUrl: './image-holder.component.html',
    styleUrls: ['./image-holder.component.scss']
})
export class ImageHolderComponent implements OnInit {
    
    @Input() isImageVisible: boolean;

    constructor() { }

    ngOnInit() {
    }

}
