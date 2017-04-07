import { Component } from '@angular/core';
import {ConversationService} from "./services/conversations.service";

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    private name:string;

    constructor(private conversationService:ConversationService){
        this.name = "Carlos"
    }

    addConversation(){
        this.conversationService.addConversation();
    }
}

