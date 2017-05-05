import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Conversation} from "../objects/conversation";
import {User} from "../objects/user";
import {Message} from "../objects/message";
import {Web3Service} from "./web3.service";

@Injectable()
export class ConversationService {

    private conversations:Conversation[];
    private userNum:number;
    private owner:boolean;
    public web3:any;
    public myaddress:string = "0x31631b6c53d29b180c7e4c8641aa2eea04fd129f";
    public minedelimiter = true;

    constructor(){
        this.web3 = new Web3Service();
        this.conversations = [];
        this.userNum = 1;
        this.owner = true;
    }

    getConversations(){
        let chats = this.web3.getChats();
        this.conversations = [];

        for (let chat of chats) {
            let recipients = chat.getRecipients()
            if (this.checkMine(recipients)) this.conversations.push(new Conversation(chat.address, this.getUser(this.getRecipient(recipients))))
        }
        return this.conversations;
    }

    checkMine(recipients:string[]):boolean{

        for (let recipient of recipients){
            if (recipient == this.myaddress) return true;
        }
        return false;
    }

    getRecipient(recipients:string[]):string{
        for (let recipient of recipients){
            if (recipient != this.myaddress) return recipient;
        }
    }

    getUser(address:string){
        let user = this.web3.getUser(address);
        return new User(user.address, user.getName());
    }

    getConversation(id:string){

        for(let conversation of this.conversations){
            if(conversation.id === id){
                return this.getMessages(conversation);
            }
        }

        return null;
    }

    addConversation():Conversation {
        let conv = new Conversation("0x3be379525f2f135bda86bd8e58d9962170302242", new User("", "User"+this.userNum));
        return conv
    }

    addMessage(conversation:Conversation, content:string):Message {
        let message = new Message("", content, true);
        conversation.messages.push(message);
        conversation.lastMessage = message;
        this.owner = !this.owner;
        return message;
    }

    getMessages(conversation:Conversation){
        console.log("retrieving " + conversation)
        conversation.messages = [];
        let messages = this.web3.getChat(conversation.address).getMessages();
        for (let message of messages) {
            conversation.messages.push(this.getMessage(message));
        }
        conversation.lastMessage = conversation.messages[conversation.messages.length-1];
        return conversation;
    }

    getMessage(address:string):Message{
        let message = this.web3.getMessage(address);
        let content = message.getContent();
        let mine = false;
        if (content.startsWith("-") == this.minedelimiter) {
            mine = true;
            content = content.slice(1);
        }

        return new Message(message.address, content, mine);
    }


}