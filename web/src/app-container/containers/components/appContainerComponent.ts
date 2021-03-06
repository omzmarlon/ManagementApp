import {Component, AfterViewInit, ViewChild} from "@angular/core";
import {AuthenticationService} from "../../authentication/services/authenticationService";
import {SpinnerAnchor} from "../../spinners/components/spinnerComponent";
import {SpinnerService} from "../../spinners/services/spinnerService";
import {AbstractBaseComponent} from "../../../common/components/baseComponent";
import {Subscription} from "rxjs/Rx";
import {Router} from "@angular/router";
import {InfoBarService} from "../../../common/services/infoBarService";

@Component({
    selector: "management-app",
    templateUrl: "assets/target/app-container/containers/components/appContainer.html",
    styleUrls: ["assets/target/app-container/containers/components/appContainer.css"]
})
export class AppContainerComponent extends AbstractBaseComponent implements AfterViewInit {
    @ViewChild(SpinnerAnchor) public spinnerAnchor: SpinnerAnchor;

    constructor(
        private _authService: AuthenticationService,
        private _spinnerService: SpinnerService,
        private _router: Router,
        private _infoBarService: InfoBarService
    ) {
        super();
    }

    public ngAfterViewInit(): void {
        const subscription: Subscription = this._spinnerService.control.subscribe(
            (control: boolean) => {
                if (control) {
                    this.spinnerAnchor.createSpinner();
                } else {
                    this.spinnerAnchor.destroySpinner();
                }
            }
        );
        this.addSubscription(subscription);
    }

    public get username(): string {
        return this._authService.getUsername();
    }

    public isLoggedIn(): boolean {
        return this._authService.isUserLoggedIn();
    }

    public logout(): void {
        this._authService.logout().subscribe(
            () => {
                this._router.navigate(["/"]);
                this._infoBarService.notifyInfo("Successfully Logged out!");
            }
        );
    }

    public loadingOnNavigation(dest: string): void {
        if (!this._router.url.includes(dest)) {
            this._spinnerService.showSpinner();
        }
    }
}
