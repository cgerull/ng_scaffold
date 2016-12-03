// ip.service.ts
import { Injectable } from '@angular/core';
import { IIp } from './ip';
import { IDate  } from './date';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JsonService {
	private _ipUrl = 'http://ip.jsontest.com';
	private _dateUrl = 'http://date.jsontest.com';

	constructor(private _http: Http) { }

  getIp(): Observable<IIp> {
           return this._http.get(this._ipUrl)
            .map((response: Response) => <IIp>response.json())
            .do(data => console.log("IP: " + JSON.stringify(data)))
            .catch(this.handleError);
   }

	getDate(): Observable<IDate> {
           return this._http.get(this._dateUrl)
            .map((response: Response) => <IDate>response.json())
            .do(data => console.log("Date: " + JSON.stringify(data)))
            .catch(this.handleError);
   }

	handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server Error');
	}
}