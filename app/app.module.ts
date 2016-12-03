//<reference path="../typings/index.d.ts"/>
// Imports
import {NgModule} from "@angular/core";  
import {BrowserModule} from "@angular/platform-browser";  
import {HttpModule, JsonpModule} from "@angular/http";  
import {FormsModule} from "@angular/forms";
import "rxjs/Rx";

// Declarations
import {AppComponent} from "./app.component";
import {WelcomeComponent} from "./home/welcome.component";
import {AboutComponent} from "./home/about.component";
import { JServComponent } from './services/jserv.component';
import {routing} from "./app.router";

// Decorator
@NgModule({
    // directives, components, and pipes
    declarations: [
        AppComponent,
        WelcomeComponent,
        AboutComponent,
        JServComponent
    ],
    // modules
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    // providers
    providers: [
        
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }  