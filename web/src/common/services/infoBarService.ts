import {Injectable, NgZone, ViewContainerRef} from "@angular/core";
import {MdSnackBar} from "@angular/material";

@Injectable()
export class InfoBarService {

    constructor(
        private _snackBar: MdSnackBar,
        private _zone: NgZone
    ) {}

    public notifyInfo(info: string, duration: number = 1500): void {
        this._zone.run(
            () => this._snackBar.open(info, "",
                {
                    duration: duration
                })
        );
    }
}
