import {User} from "./user";
import {Message} from "./message";

export class Conversation {
    public address:string;
    public id:string;
    public recipient:User;
    public messages:Message[];
    public lastMessage:Message;

    constructor(address:string, user:User){
        this.address = address;
        this.id = user.address;
        this.recipient = user;
        this.messages = [];
        this.lastMessage = null;
    }

}