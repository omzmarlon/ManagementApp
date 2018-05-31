import {Component, AfterViewInit} from "@angular/core";
import {SpinnerService} from "../../app-container/spinners/services/spinnerService";

@Component({
    selector: "quiz-container",
    templateUrl: "assets/target/profiles/components/profileContainer.ng.html",
    styleUrls: ["assets/target/profiles/components/profileContainer.css"]
})
export class ProfileContainerComponent implements AfterViewInit {
    constructor(private _spinnerService: SpinnerService) {}

    public ngAfterViewInit(): void {
        this._spinnerService.hideSpinner();
    }
}
