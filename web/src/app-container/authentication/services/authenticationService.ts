import {Injectable} from "@angular/core";
import {MAHttp} from "../../../common/services/http";
import {Observable} from "rxjs/Rx";
import {ManagementAppRoute} from "../../../common/util/routes";
import {AccountDTO} from "../../../dto/Users";
import * as Cookies from "js-cookie";

@Injectable()
export class AuthenticationService {
    private static USERNAME_COOKIE: string = "username";

    constructor(private _http: MAHttp) {}

    public isUserLoggedIn(): boolean {
        return Cookies.get(AuthenticationService.USERNAME_COOKIE) !== undefined;
    }

    public getUsername(): string {
        return Cookies.get(AuthenticationService.USERNAME_COOKIE);
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
