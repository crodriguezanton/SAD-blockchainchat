import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Conversation} from "../objects/conversation";
import {User} from "../objects/user";
import {Message} from "../objects/message";

@Injectable()
export class ConversationService {

    private conversations:Conversation[];
    private userNum:number;
    private messNum:number;
    private owner:boolean;

    constructor(){
        this.conversations = [];
        this.userNum = 1;
        this.messNum = 1;
        this.owner = true;
    }

    getConversations(){
        return this.conversations;
    }

    getConversation(id:string){
        for(let conversation of this.conversations){
            if(conversation.id === id){
                return conversation;
            }
        }
        return null;
    }

    addConversation():Conversation {
        let conv = new Conversation(new User("id"+this.userNum, "User"+this.userNum));
        this.conversations.push(conv);
        this.userNum++;
        return conv
    }

    addMessage(conversation:Conversation, content:string):Message {
        let message = new Message(content, this.owner);
        conversation.messages.push(message);
        conversation.lastMessage = message;
        this.owner = !this.owner;
        return message;
    }

}