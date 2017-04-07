export class Message {
    public content:string;
    public timestamp:any;
    public owner:boolean;

    constructor(content:string, owner:boolean){
        this.content = content;
        this.owner = owner;
        this.timestamp = new Date();
    }
}