import {Component, AfterViewInit} from "@angular/core";
import {SpinnerService} from "../../app-container/spinners/services/spinnerService";
import {Observable} from "rxjs/Rx";
import {CookieService} from "../../common/services/cookieService";

@Component({
    selector: "quiz-container",
    templateUrl: "assets/target/quizzes/components/quizContainer.ng.html",
    styleUrls: ["assets/target/quizzes/components/quizContainer.css"]
})
export class QuizContainerComponent implements AfterViewInit {
    public quizExists: Observable<boolean>;
    constructor(
        private _spinnerService: SpinnerService,
        private _cookieService: CookieService
    ) {}

    public ngAfterViewInit(): void {
        this._spinnerService.hideSpinner();
    }

    public get isTutor(): boolean {
        return this._cookieService.isTutor();
    }
}
