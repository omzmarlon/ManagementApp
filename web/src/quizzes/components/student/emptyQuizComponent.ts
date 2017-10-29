import {Component, OnInit} from "@angular/core";
import {AppState} from "../../../ngrx/reducers/reducer";
import {Store} from "@ngrx/store";
import {AbstractBaseComponent} from "../../../common/components/baseComponent";
import {Observable} from "rxjs/Rx";
import {StudentActiveGroupActions} from "../../../ngrx/actions/studentActiveGroupActions";
import {QuizActions} from "../../../ngrx/actions/quizActions";
import {quizAvailable, isAlreadyAnswered} from "../../../ngrx/queries/quizStateQueries";

@Component({
    selector: "empty-quiz",
    templateUrl: "assets/target/quizzes/components/student/emptyQuiz.ng.html",
    styleUrls: ["assets/target/quizzes/components/student//emptyQuiz.css"]
})
export class EmptyQuizComponent extends AbstractBaseComponent implements OnInit {
    private _emptyReason: EmptyQuizReason = new EmptyQuizReason();

    constructor(
        private _store: Store<AppState>,
        private _activeGroupActions: StudentActiveGroupActions,
        private _studentLoadQuizActions: QuizActions
    ) {
        super();
    }

    public ngOnInit(): void {
        const activeGroup: Observable<boolean> = this._store.select(s => s.studentActiveGroup.hasActiveGroup());
        const quizAvailableObs: Observable<boolean> = this._store.select(quizAvailable);
        const notAlreadyAnswered: Observable<boolean> = this._store.select(isAlreadyAnswered);

        this.addSubscription(
            activeGroup.subscribe((value: boolean) => this._emptyReason.isActiveGroupEmpty = !value)
        );
        this.addSubscription(
            quizAvailableObs.subscribe((value: boolean) => this._emptyReason.isNoNewQuiz = !value)
        );
        this.addSubscription(
            notAlreadyAnswered.subscribe((value: boolean) => this._emptyReason.isAlreadyAnswered = value)
        );
    }

    public get emptyReason(): string {
        return this._emptyReason.getReason();
    }

    public refresh(): void {
        if (this._emptyReason.isActiveGroupEmpty) {
            this._store.dispatch(this._activeGroupActions.refreshStudentActiveGroup());
        } else {
            this._store.dispatch(this._studentLoadQuizActions.studentLoadCurrentQuiz());
        }
    }
}

class EmptyQuizReason {
    public isActiveGroupEmpty: boolean = false;
    public isNoNewQuiz: boolean = false;
    public isAlreadyAnswered: boolean = false;

    public getReason(): string {
        if (this.isActiveGroupEmpty) {
            return "You are currently not in an active group";
        } else if (this.isNoNewQuiz && (!this.isActiveGroupEmpty)) {
            return "No new quiz available";
        } else if (this.isAlreadyAnswered && (!this.isActiveGroupEmpty) && (!this.isNoNewQuiz)) {
            return "Active quiz is already answered";
        } else {
            return "";
        }
    }
}
