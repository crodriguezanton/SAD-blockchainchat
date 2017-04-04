import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routing} from "./app.routes";
import {AppComponent} from "./app.component";
import {Http, HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {ChatComponent} from "./components/chat/chat.component";
import {ChatListComponent} from "./components/chat-list/chat-list.component";
import {InputComponent} from "./components/input/input.component";

@NgModule({
    imports: [
        BrowserModule,
        Routing,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        ChatComponent,
        ChatListComponent,
        InputComponent
    ],
    providers: [],
    bootstrap: [ AppComponent, ChatComponent, ChatListComponent ]
})

export class AppModule { }
