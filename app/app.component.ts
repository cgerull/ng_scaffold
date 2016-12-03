import { Component } from '@angular/core';
import 'rxjs/Rx'; //Load all the features
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './home/about.component';
import { JServComponent } from './services/jserv.component';

@Component({
    selector: 'angula2-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-flud'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['welcome']">Home</a></li>
                    <li><a [routerLink]="['ip']">Services</a></li>
                    <li><a [routerLink]="['about']">About</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>`,
})

export class AppComponent {
    pageTitle: string = "Angular 2 scaffold";
}
