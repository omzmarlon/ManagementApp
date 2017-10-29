import {Component, OnInit, OnDestroy} from "@angular/core";
import {AppState} from "../../../ngrx/reducers/reducer";
import {Observable} from "rxjs/Rx";
import {Store} from "@ngrx/store";
import {StudentActiveGroupActions} from "../../../ngrx/actions/studentActiveGroupActions";
import {QuizItem} from "../../../ngrx/states/quizState";
import {QuizActions} from "../../../ngrx/actions/quizActions";
import {
    quizAvailable,
    notAlreadyAnswered,
    quizLength,
    quizName, startAnswering, currentQuestionIndex,
    notStartAnswering, currentQuestion,
    selectedChoicesOfCurrentItem
} from "../../../ngrx/queries/quizStateQueries";
import {hasActiveGroup} from "../../../ngrx/queries/studentActiveGroupQueries";
import {AND} from "../../../ngrx/queries/combineOperators";

@Component({
    selector: "student-quiz-container",
    templateUrl: "assets/target/quizzes/components/student/studentQuizContainer.ng.html",
    styleUrls: ["assets/target/quizzes/components/student/studentQuizContainer.css"]
})
export class StudentQuizContainerComponent implements OnInit, OnDestroy {
    public quizExistsObs: Observable<boolean>;
    public launchPreQuizScreenObs: Observable<boolean>;
    public launchQuizScreenObs: Observable<boolean>;
    public currentItemObs: Observable<QuizItem>;
    public currentIndexObs: Observable<number>;
    public quizNameObs: Observable<string>;
    public quizLengthObs: Observable<number>;
    public selectedChoicesObs: Observable<number>; // for current index
    constructor(
        private _store: Store<AppState>,
        private _studentActiveGroupAction: StudentActiveGroupActions,
        private _quizActions: QuizActions
    ) {}

    public ngOnInit(): void {
        // Do necessary checks
        this._store.dispatch(this._studentActiveGroupAction.checkStudentActiveGroup());
        // Construct observables
        this.launchQuizScreenObs = this._store.select(startAnswering);
        this.currentItemObs = this._store.select(currentQuestion);
        this.quizLengthObs = this._store.select(quizLength);
        this.quizNameObs = this._store.select(quizName);
        this.currentIndexObs = this._store.select(currentQuestionIndex);
        this.selectedChoicesObs = this._store
            .select(selectedChoicesOfCurrentItem)
            .map(x => {if (x.isSome()) {
                return x.some();
            } else {
                return -1;
            }});

        const activeGroupObs: Observable<boolean> = this._store.select(hasActiveGroup);
        const quizAvailableObs: Observable<boolean> = this._store.select(quizAvailable);
        const notAlreadyAnsweredObs: Observable<boolean> = this._store.select(notAlreadyAnswered);
        this.quizExistsObs = activeGroupObs
            .combineLatest(quizAvailableObs, AND)
            .combineLatest(notAlreadyAnsweredObs, AND);
        this.launchPreQuizScreenObs = quizAvailableObs
            .combineLatest(notAlreadyAnsweredObs, AND)
            .combineLatest(this._store.select(notStartAnswering), AND);
    }

    public nextQuestion(): void {
        this._store.dispatch(this._quizActions.nextQuestion());
    }

    public previousQuestion(): void {
        this._store.dispatch(this._quizActions.previousQuestion());
    }

    public resetStudentQuizUsage(): void {
        this._store.dispatch(this._quizActions.resetQuizUsage());
    }

    public handleChoice(index: number): void {
        this._store.dispatch(this._quizActions.choice(index));
    }

    public ngOnDestroy(): void {
        this._store.dispatch(this._quizActions.resetQuiz());
    }
}
