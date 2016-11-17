import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/home/about.component.html'
})
export class AboutComponent {
    public pageTitle: string = "About";
    public copyright: string = "(c) 2016 Copyright Claus Gerull"
    public license: string = "MIT"
}