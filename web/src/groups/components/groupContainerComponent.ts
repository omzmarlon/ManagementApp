import {Component, AfterViewInit} from "@angular/core";
import {SpinnerService} from "../../app-container/spinners/services/spinnerService";

@Component({
    selector: "quiz-container",
    templateUrl: "assets/target/groups/components/groupContainer.ng.html",
    styleUrls: ["assets/target/groups/components/groupContainer.css"]
})
export class GroupContainerComponent implements AfterViewInit {

    constructor(private _spinnerService: SpinnerService) {}

    public ngAfterViewInit(): void {
        this._spinnerService.hideSpinner();
    }
}
