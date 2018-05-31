import {Injectable} from "@angular/core";
import {Maybe, None, Some} from "monet";
import * as _ from "@types/lodash";
import * as Cookies from "js-cookie";

@Injectable()
export class CookieService {
    private static USERNAME_COOKIE: string = "username";
    private static CURRENT_GROUP_ID_COOKIE: string = "current_group_id";
    private static IS_TUTOR: string = "is_tutor";

    private static isCookieDefined(cookie: string) {
        return !(_.isUndefined(cookie) || _.isEmpty(cookie));
    }

    private static getCookie(cookieName: string): Maybe<string> {
        const cookie: string = Cookies.get(cookieName);
        if (CookieService.isCookieDefined(cookie)) {
            return Some(cookie);
        } else {
            return None<string>();
        }
    }

    public getUsername(): Maybe<string> {
        return CookieService.getCookie(CookieService.USERNAME_COOKIE);
    }

    public getCurrentGroup(): Maybe<string> {
        return CookieService.getCookie(CookieService.CURRENT_GROUP_ID_COOKIE);
    }

    public isTutor(): boolean {
        const cookie: Maybe<string> = CookieService.getCookie(CookieService.IS_TUTOR);
        if (cookie.isSome()) {
            const cookieStr: string = cookie.some().toLowerCase();
            return cookieStr === "true";
        } else {
            return false;
        }
    }
}
