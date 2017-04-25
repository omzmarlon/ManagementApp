import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppContainerComponent } from "./components/appContainerComponent";
import {AppRoutingModule} from "./rootRoutingModule";
import {MACommonModule} from "../common/commonModule";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {HomeComponent} from "./components/homeComponent";
import {AuthenticationComponent} from "./components/authenticationComponent";

@NgModule({
    declarations: [AppContainerComponent, HomeComponent, AuthenticationComponent],
    imports: [BrowserModule, AppRoutingModule, MACommonModule], // feature modules to be loaded async
    bootstrap: [AppContainerComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {}
