import {Component, Input} from '@angular/core';
import { ApplicationConstants } from '../../constants/ApplicationConstants';
import { OnInit } from '@angular/core';
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {MD_ICON_DIRECTIVES} from "@angular2-material/icon/icon";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input/input";
import {MdToolbar} from "@angular2-material/toolbar/toolbar";
@Component({
    selector: 'jg-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: [ApplicationConstants.BASE_TEMPLATE_PATH + 'components/navbar/navbar.component.css'],
    directives: [MD_ICON_DIRECTIVES],
    viewProviders: [MdIconRegistry]
})
export class NavbarComponent implements OnInit{
    @Input() iconSize = "40px";
    constructor(MdIconRegistry: MdIconRegistry){
        MdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    ngOnInit() {
    }
}