import {Injectable} from "@angular/core";
import {QuizActions} from "../actions/quizActions";
import {Actions, Effect} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {StudentQuizService} from "../../quizzes/services/studentQuizService";
import {Observable} from "rxjs/Rx";
import {Quiz, QuizState} from "../states/quizState";
import {Maybe} from "monet";
import {CookieService} from "../../common/services/cookieService";

@Injectable()
export class QuizEffects {
    @Effect()
    public studentLoadCurrentQuizEffect: Observable<Action> =
        this._actions
            .ofType(QuizActions.STUDENT_LOAD_CURRENT_QUIZ)
            .map(() => this._cookieService.getCurrentGroup())
            .filter((group: Maybe<string>) => group.isSome())
            .switchMap((groupId: Maybe<string>) => this._studentQuizService.loadStudentCurrentQuiz(groupId.some()))
            .map((quiz: Quiz) => this._quizActions.studentLoadCurrentQuizSuccess(new QuizState(quiz)));

    constructor(
        private _quizActions: QuizActions,
        private _actions: Actions,
        private _cookieService: CookieService,
        private _studentQuizService: StudentQuizService
    ) {}
}
