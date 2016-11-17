import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; //Load all the features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

//import { ProductListComponent } from './products/product-list.component';
//import { ProductService } from './products/product.service';
//import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './home/about.component';

@Component({
    selector: 'angula2-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-flud'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['About']">About</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS,
        ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path: '/about', name: 'About', component: AboutComponent},
    //{path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent}
])
export class AppComponent {
    pageTitle: string = "Angular 2 scaffold";    
}
