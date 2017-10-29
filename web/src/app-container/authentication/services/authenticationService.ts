import {Injectable, NgZone} from "@angular/core";
import {MAHttp} from "../../../common/services/http";
import {Observable} from "rxjs/Rx";
import {ManagementAppRoute} from "../../../common/util/routes";
import {AccountDTO} from "../../../dto/Users";
import {CookieService} from "../../../common/services/cookieService";

@Injectable()
export class AuthenticationService {

    /**
     * TODO:
     * This file's subscribers need to handle errors otherwise the errors passed from my wrapper MAHttp
     * would be out in the wild, which could leads to web app crash or unexpected behaviours
     * */

    constructor(
        private _http: MAHttp,
        private _cookieService: CookieService,
        private _zone: NgZone
    ) {}

    public isUserLoggedIn(): boolean {
        /*
        * Cookies are changed after http requests. And Angular change detection does not expect this change.
        * (eg. Last value of a field whose value pulled from cookies using a getter was "abc",
        * but after a http request it's changed to "edf". When angular sees unexpected "edf" it throws exception)
        * We need to tell angular that this change is expected by using zones
        * */
        return this._zone.run(() => this._cookieService.getUsername().isSome());
    }

    public getUsername(): string {
        return this._zone.run(() => this._cookieService.getUsername().orSome(""));
    }

    public login(email: string, password: string): Observable<any> {
        const dto: AccountDTO = new AccountDTO();
        dto.email = email;
        dto.password = password;
        return this._http.post(ManagementAppRoute.LOGIN, dto.toJSON());
    }

    public register(email: string, password: string, username: string): Observable<any> {
        const dto: AccountDTO = new AccountDTO();
        dto.email = email;
        dto.password = password;
        dto.username = username;
        return this._http.post(ManagementAppRoute.REGISTER, dto.toJSON());
    }

    public logout(): Observable<any> {
        return this._http.post(ManagementAppRoute.LOGOUT, {});
    }
}
