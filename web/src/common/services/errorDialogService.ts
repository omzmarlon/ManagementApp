import {Injectable} from "@angular/core";
import {MdDialog, MdDialogRef} from "@angular/material";
import {Observable} from "rxjs/Rx";
import {ErrorInfoReportComponent} from "../components/errorReportComponent";
import {MAError} from "../models/errorModels";

@Injectable()
export class ErrorDialogService {
    constructor(private _mdDialog: MdDialog) {}

    public openErrorInfoDialog(error: MAError): Observable<any> {
        const dialogRef: MdDialogRef<ErrorInfoReportComponent> = this._mdDialog.open(
            ErrorInfoReportComponent,
            {
                data: error
            }
        );
        return dialogRef.afterClosed();
    }
}
