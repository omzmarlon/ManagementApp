import { NgModule } from "@angular/core";
import { AppContainerComponent } from "./containers/components/appContainerComponent";
import {AppRoutingModule} from "./rootRoutingModule";
import {MACommonModule} from "../common/commonModule";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {HomeComponent} from "./containers/components/homeComponent";
import {AuthenticationComponent} from "./authentication/components/authenticationComponent";
import {AuthGuard} from "./authentication/services/authGuard";
import {MAHttp} from "../common/services/http";
import {AuthenticationService} from "./authentication/services/authenticationService";
import {SpinnerService} from "./spinners/services/spinnerService";
import {SpinnerAnchor, SpinnerComponent} from "./spinners/components/spinnerComponent";

@NgModule({
    declarations: [AppContainerComponent, HomeComponent, AuthenticationComponent, SpinnerAnchor, SpinnerComponent],
    imports: [AppRoutingModule, MACommonModule], // feature modules to be loaded async
    bootstrap: [AppContainerComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        AuthGuard,
        MAHttp, // MAHttp needs to be provided globally because it does error-handling for the entire application
        AuthenticationService,
        SpinnerService
    ],
    entryComponents: [SpinnerComponent]
})
export class AppModule {}
