import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routing} from "./app.routes";
import {AppComponent} from "./app.component";
import {Http, HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {ChatComponent} from "./components/chat/chat.component";
import {ChatListComponent} from "./components/chat-list/chat-list.component";
import {InputComponent} from "./components/input/input.component";
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {ConversationService} from "./services/conversations.service";
import {MenuBarComponent} from "./components/menu-bar/manu-bar.component";

@NgModule({
    imports: [
        BrowserModule,
        Routing,
        FormsModule,
        HttpModule,
        JsonpModule,
        MaterialModule,
    ],
    declarations: [
        AppComponent,
        ChatComponent,
        ChatListComponent,
        InputComponent,
        MenuBarComponent
    ],
    providers: [ConversationService],
    bootstrap: [ AppComponent, ChatListComponent, MenuBarComponent ]
})

export class AppModule { }
