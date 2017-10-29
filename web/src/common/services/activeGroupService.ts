import {Injectable} from "@angular/core";
import {MAHttp} from "./http";
import {Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {ManagementAppRoute} from "../util/routes";

@Injectable()
export class ActiveGroupService {

    /**
     * TODO:
     * This file's subscribers need to handle errors otherwise the errors passed from my wrapper MAHttp
     * would be out in the wild, which could leads to web app crash or unexpected behaviours
     * */

    constructor(
        private _http: MAHttp
    ) {}

    public refreshActiveGroup(): Observable<Response> {
        return this._http.get(ManagementAppRoute.STUDENT_CURRENT_GROUP);
    }
}
