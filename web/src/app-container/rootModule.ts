import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppContainerComponent } from "./components/appContainerComponent";
import {AppRoutingModule} from "./rootRoutingModule";
import {MACommonModule} from "../common/commonModule";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

@NgModule({
    declarations: [AppContainerComponent],
    imports: [BrowserModule, AppRoutingModule, MACommonModule], // feature modules to be loaded async
    bootstrap: [AppContainerComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule {}
