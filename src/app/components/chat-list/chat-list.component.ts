import { Component } from '@angular/core';
import {ConversationService} from "../../services/conversations.service";
import {Conversation} from "../../objects/conversation";
import {Router} from "@angular/router";

@Component({
    selector: 'side-bar',
    templateUrl: 'chat-list.component.html',
    styleUrls: ['chat-list.component.css']
})

export class ChatListComponent {
    private conversations:Conversation[];

    constructor(private conversationService:ConversationService, private router: Router){
        this.conversations = this.conversationService.getConversations().sort((a, b) => {
            return a>b ? -1 : a<b ? 1 : 0
        });
    }

    addConversation(){
        this.conversationService.addConversation();
    }

    clickChat(event:any ,conversation:Conversation) {
        $(".chat-row").removeClass("active");
        $(event.target).closest(".chat-row").addClass("active");
        this.router.navigate(['/chat', conversation.id]);
    }

}

