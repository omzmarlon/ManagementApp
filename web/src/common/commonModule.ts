import {NgModule} from "@angular/core";
import {
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    MdSnackBarModule,
    MdChipsModule, MdIconModule, MdSidenavModule, MdTooltipModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ErrorInfoReportComponent} from "./components/errorReportComponent";
import {CommonModule} from "@angular/common";

const materialModules: any[] = [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    MdSnackBarModule,
    MdChipsModule,
    MdIconModule,
    MdSidenavModule,
    MdTooltipModule
];

const angularCoreModules: any[] = [
    FormsModule,
    HttpModule,
    CommonModule
];

@NgModule({
    imports: [
        ...materialModules,
        ...angularCoreModules
    ],
    exports: [
        ...materialModules,
        ...angularCoreModules
    ],
    declarations: [ErrorInfoReportComponent]

})
export class MACommonModule {}
