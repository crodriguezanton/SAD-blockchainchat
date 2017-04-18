import { Component } from '@angular/core';
import {ConversationService} from "../../services/conversations.service";
import {Conversation} from "../../objects/conversation";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'input-container',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.css']
})

export class InputComponent {
    private conversation:Conversation;

    constructor(private conversationService:ConversationService, private route: ActivatedRoute){
        this.route.params.subscribe((params: {id: string}) => {
            this.conversation=this.conversationService.getConversation(params.id);
        });
    }

    sendMessage(){
        let input = $("#input-text");
        if (input.val() != ""){
            this.conversationService.addMessage(this.conversation, input.val());
            input.val("");
        }
    }
}