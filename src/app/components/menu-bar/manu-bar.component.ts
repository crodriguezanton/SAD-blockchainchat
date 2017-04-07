import { Component } from '@angular/core';
import {ConversationService} from "../../services/conversations.service";
import {Conversation} from "../../objects/conversation";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'menu-bar',
    templateUrl: 'menu-bar.component.html',
    styleUrls: ['menu-bar.component.css']
})

export class MenuBarComponent {
    private conversation:Conversation;

    constructor(private conversationService:ConversationService, private router:Router, private route: ActivatedRoute){
        if (this.router.url === '/chat'){
            this.route.params.subscribe((params: {id: string}) => {
                this.conversation=this.conversationService.getConversation(params.id);
            });
        }
    }

    addConversation(){
        this.conversationService.addConversation();
    }

}