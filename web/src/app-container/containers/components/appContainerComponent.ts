import {Component, AfterViewInit, ViewChild} from "@angular/core";
import {AuthenticationService} from "../../authentication/services/authenticationService";
import * as jwt from "jwt-decode";
import {SpinnerAnchor} from "../../spinners/components/spinnerComponent";
import {SpinnerService} from "../../spinners/services/spinnerService";
import {AbstractBaseComponent} from "../../../common/components/baseComponent";
import {Subscription} from "rxjs/Rx";
import * as Cookies from "@types/js-cookie";

@Component({
    selector: "management-app",
    templateUrl: "assets/target/app-container/containers/components/appContainer.html",
    styleUrls: ["assets/target/app-container/containers/components/appContainer.css"]
})
export class AppContainerComponent extends AbstractBaseComponent implements AfterViewInit {
    @ViewChild(SpinnerAnchor) public spinnerAnchor: SpinnerAnchor;

    constructor(
        private _authService: AuthenticationService,
        private _spinnerService: SpinnerService
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
        this._authService.logout().subscribe();
    }
}
