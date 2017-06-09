import {NgModule} from "@angular/core";
import {
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdDialogModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ErrorInfoReportComponent} from "./components/errorReportComponent";

const sharedModules: any[] = [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdProgressSpinnerModule,
    MdDialogModule
];

@NgModule({
    imports: sharedModules,
    exports: sharedModules,
    declarations: [ErrorInfoReportComponent]

})
export class MACommonModule {}
