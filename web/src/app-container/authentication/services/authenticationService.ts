import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {MAHttp} from "../../../common/services/http";
import {Observable} from "rxjs/Rx";
import {ManagementAppRoute} from "../../../common/util/routes";
import {AccountDTO} from "../../../dto/Users";
import {TokenDTO} from "../../../dto/Authentication";

@Injectable()
export class AuthenticationService {
    private static STORAGE_KEY: string = "token";

    constructor(private _http: MAHttp) {}

    public isUserLoggedIn(): boolean {
        return (localStorage.getItem(AuthenticationService.STORAGE_KEY) !== null)
            && (localStorage.getItem(AuthenticationService.STORAGE_KEY) !== undefined);
    }

    public storeToken(token: string): void {
        localStorage.setItem(AuthenticationService.STORAGE_KEY, token);
    }

    public removeToken(): void {
        localStorage.removeItem(AuthenticationService.STORAGE_KEY);
    }

    public getToken(): string {
        return localStorage.getItem(AuthenticationService.STORAGE_KEY);
    }

    public login(email: string, password: string): Observable<string> {
        const dto: AccountDTO = new AccountDTO();
        dto.email = email;
        dto.password = password;
        const response: Observable<Response> = this._http.post(ManagementAppRoute.LOGIN, dto.toJSON());
        return response.map(
            (res: Response) => TokenDTO.fromObject(res.json()).token
        );
    }

    public register(email: string, password: string, username: string): Observable<any> {
        const dto: AccountDTO = new AccountDTO();
        dto.email = email;
        dto.password = password;
        dto.username = username;
        return this._http.post(ManagementAppRoute.REGISTER, dto.toJSON());
    }
}
