import {Injectable} from "@angular/core";
import {Conversation} from "../objects/conversation"

let Web3 = require('web3');
let databaseABI = require('../../assets/utils/abi/DatabaseABI.js');
let messageABI = require('../../assets/utils/abi/MessageABI.js');
let chatABI = require('../../assets/utils/abi/ChatABI.js');
let userABI = require('../../assets/utils/abi/UserABI.js');


@Injectable()
export class Web3Service {

    public web3:any;
    public databaseContract:any;
    public messageContract:any;
    public chatContract:any;
    public userContract:any;

    constructor() {
        this.web3 = new Web3();
        this.web3.setProvider(new this.web3.providers.HttpProvider('https://ropsten.infura.io/n1D628Oks5qlhb8bGlAk'));
        this.databaseContract = this.web3.eth.contract(databaseABI);
        this.messageContract = this.web3.eth.contract(messageABI);
        this.chatContract = this.web3.eth.contract(chatABI);
        this.userContract = this.web3.eth.contract(userABI);
    }

    public getDatabase(){
        return this.databaseContract.at('0xa431036ac65b5e727889eb8c034f3a7a26e25f69')
    }

    public getChats(){
        let chats = [];
        let chatAddresses = this.getDatabase().getChats();
        for (let chatAddress of chatAddresses) {
            chats.push(this.chatContract.at(chatAddress));
        }
        console.log(chats);
        return chats;
    }

    public getMessages(chat:Conversation){
        let messages = [];
        let messageAddresses = this.chatContract.at(chat.address).getMessages();
        for (let messageAddress of messageAddresses) {
            messages.push(this.messageContract.at(messageAddress));
        }
        return messages;
    }

    public getUser(address:string){
        return this.userContract.at(address);
    }

    public getChat(address:string){
        return this.chatContract.at(address);
    }

    public getMessage(address:string){
        return this.messageContract.at(address);
    }

}