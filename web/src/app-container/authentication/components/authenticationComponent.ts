import {Component} from "@angular/core";
import {AuthMode} from "../models/authMode";
import {AuthenticationService} from "../services/authenticationService";
import {Account} from "../models/account";
import {Some} from "monet";
import {Router} from "@angular/router";
import {AbstractBaseComponent} from "../../../common/components/baseComponent";
import {Subscription} from "rxjs";
import {SpinnerService} from "../../spinners/services/spinnerService";

@Component({
    selector: "ma-authentication",
    templateUrl: "assets/target/app-container/authentication/components/authentication.ng.html",
    styleUrls: ["assets/target/app-container/authentication/components/authentication.css"]
})
export class AuthenticationComponent extends AbstractBaseComponent {
    public authModes: typeof AuthMode = AuthMode;
    private _authMode: AuthMode = AuthMode.LOGIN;
    private _account: Account;

    constructor(
        private _authService: AuthenticationService,
        private _router: Router,
        private _spinnerService: SpinnerService
    ) {
        super();
        this._account = new Account();
    }

    public setAuthMode(auth: AuthMode): void { this._authMode = auth; }

    public get isRegistrationMode(): boolean { return this._authMode === AuthMode.REGISTER; }

    public get isLoginMode(): boolean { return this._authMode === AuthMode.LOGIN; }

    public get email(): string { return this._account.email.orSome(""); }
    public set email(value: string) { this._account.email = Some(value); }

    public get password(): string { return this._account.password.orSome(""); }
    public set password(value: string) { this._account.password = Some(value); }

    public get username(): string { return this._account.username.orSome(""); }
    public set username(value: string) { this._account.username = Some(value); }

    public canLogin(): boolean { return this._account.hasProperLoginDetails(); }
    public canRegister(): boolean { return this._account.hasProperRegistrationDetails(); }

    public login(): void {
        this._spinnerService.showSpinner();
        if (this.canLogin()) {
            const subscription: Subscription =
                this._authService.login(this._account.email.some(), this._account.password.some()).subscribe(
                    (token: string) => {
                        this._spinnerService.hideSpinner();
                        this._authService.storeToken(token);
                        this._router.navigate(["/"]);
                    }
                );
            this.addSubscription(subscription);
        }
    }

    public register(): void {
        this._spinnerService.showSpinner();
        if (this.canRegister()) {
            const subscription: Subscription = this._authService.register(
                this._account.email.some(),
                this._account.password.some(),
                this._account.username.some()
            ).subscribe(
                () => {
                    this._spinnerService.hideSpinner();
                    this.setAuthMode(AuthMode.LOGIN);
                }
            );
            this.addSubscription(subscription);
        }
    }
}
