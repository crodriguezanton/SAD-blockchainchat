import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ChatComponent} from "./components/chat/chat.component";
export const routes: Routes = [
    { path: 'chat/:id',      component: ChatComponent },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
