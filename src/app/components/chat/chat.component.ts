import { Component } from '@angular/core';
import {Conversation} from "../../objects/conversation";
import {ConversationService} from "../../services/conversations.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'chat',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.css']
})

export class ChatComponent {
    private conversation:Conversation;

    constructor(private conversationService:ConversationService, private route: ActivatedRoute){
        this.route.params.subscribe((params: {id: string}) => {
            this.conversation=this.conversationService.getConversation(params.id);
        });
        $(".chat-container").scrollTop($(".chat-container").scrollHeight)
        
    }

    addMessage(){
        let message = this.conversationService.addMessage(this.conversation, "TestMessage");
    }

    retrieve(){
        this.conversationService.getMessages(this.conversation);
    }
}


