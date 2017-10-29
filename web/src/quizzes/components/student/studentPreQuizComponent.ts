import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../../../ngrx/reducers/reducer";
import {QuizActions} from "../../../ngrx/actions/quizActions";

@Component({
    selector: "pre-quiz",
    templateUrl: "assets/target/quizzes/components/student/studentPreQuiz.ng.html",
    styleUrls: ["assets/target/quizzes/components/student/studentPreQuiz.css"]
})
export class StudentPreQuizComponent {
    constructor(
        private _store: Store<AppState>,
        private _studentQuizUsageActions: QuizActions
    ) {}

    public launchQuiz(): void {
        this._store.dispatch(this._studentQuizUsageActions.launchAnswering());
    }
}
