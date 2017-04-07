import {User} from "./user";
import {Message} from "./message";

export class Conversation {
    public id:string;
    public recipient:User;
    public messages:Message[];
    public lastMessage:Message;

    constructor(user:User){
        this.id = user.id;
        this.recipient = user;
        this.messages = [];
        this.lastMessage = null;
    }

}