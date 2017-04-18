contract owned {
    function owned() { owner = msg.sender; }
    address owner;
}

contract Message {

    User sender;
    string content;
    uint timestamp;

    function Message(User _sender, string _content, uint _timestamp){
        sender = _sender;
        content = _content;
        timestamp = _timestamp;
    }

    function getContent() constant returns(string){
        return content;
    }

    function getTimestamp() constant returns(uint){
        return timestamp;
    }

    function isOwned() constant returns(bool){
        return sender.isOwner();
    }

}

contract User is owned {
    string name;
    Chat[] chat;

    function User(string _name) {
        name = _name;
    }

    function getName() constant returns(string){
        return name;
    }

    function kill() {
        if (msg.sender == owner) selfdestruct(owner);
    }

    function isOwner() constant returns(bool){
        return msg.sender == owner;
    }
}

contract Chat {

    string name;
    User[] recipients;
    Message[] messages;

    function Chat(User sender, User recipient) {
        recipients.push(sender);
        recipients.push(recipient);
    }

    function setName(string _name){
        name = _name;
    }

    function getRecipients() constant returns(User[]) {
        return recipients;
    }

    function getMessages() constant returns(Message[]) {
        return messages;
    }

    function addMessage(User _sender, string _content, uint _timestamp) {
        messages.push(new Message(_sender, _content, _timestamp));
    }
}