export class Message {
    public address:string;
    public content:string;
    public timestamp:any;
    public owner:boolean;

    constructor(address:string, content:string, owner:boolean){
        this.address = address;
        this.content = content;
        this.owner = owner;
        this.timestamp = new Date();
    }
}