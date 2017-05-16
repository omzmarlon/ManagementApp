import {Http, RequestOptionsArgs, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";

@Injectable()
export class MAHttp {
    constructor(private _angularHttp: Http) {}

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this._angularHttp.post(url, body, options);
    }
}
