import {ChangeDetectionStrategy, Component, Inject} from "@angular/core";
import {MAError} from "../models/errorModels";
import {MD_DIALOG_DATA} from "@angular/material";

@Component({
    selector: "error-report",
    templateUrl: "assets/target/common/components/errorReport.ng.html",
    styleUrls: ["assets/target/common/components/errorReport.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorInfoReportComponent {
    constructor(@Inject(MD_DIALOG_DATA)public error: MAError) {}
}
