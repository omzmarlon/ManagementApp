import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppContainerComponent} from "./app-container/AppContainerComponent";

@NgModule({
    declarations: [AppContainerComponent],
    imports: [BrowserModule],
    bootstrap: [AppContainerComponent]
})
export class AppModule {}
