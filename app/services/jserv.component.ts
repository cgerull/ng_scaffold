// ip.component.ts
import { Component, OnInit } from '@angular/core';
import { IIp } from './ip';
import { IDate  } from './date';
import { JsonService } from './json.service';

@Component({
    selector: 'sv_ip',
    templateUrl: 'app/services/jserv.component.html',
    providers: [JsonService]
})

export class JServComponent
    implements OnInit {
    pageTitle: string = 'JSON services';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    myIp: IIp;
    myDate: IDate;
    errorMessage: string;

    constructor(private _jsonService: JsonService) {

    }

    ngOnInit(): void {
        this._jsonService.getIp()
            .subscribe(
            ip => {
                this.myIp = ip;
                console.log("myIp: " + JSON.stringify(this.myIp) + "; IP: " + this.myIp.ip);
            },
            error => this.errorMessage = <any>error);
        this._jsonService.getDate()
            .subscribe(
            date => {
                this.myDate = date;
                console.log("myDate: " + JSON.stringify(this.myDate));
            },
            error => this.errorMessage = <any>error);
    }
}