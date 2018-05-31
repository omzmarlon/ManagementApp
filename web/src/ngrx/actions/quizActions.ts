import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";
import {QuizState} from "../states/quizState";

@Injectable()
export class QuizActions {
    /*tslint:disable:member-ordering*/
    public static STUDENT_LOAD_CURRENT_QUIZ: string = "STUDENT_LOAD_CURRENT_QUIZ";
    public studentLoadCurrentQuiz(): Action {
        return {
            type: QuizActions.STUDENT_LOAD_CURRENT_QUIZ
        };
    }
    public static STUDENT_LOAD_CURRENT_QUIZ_SUCCESS: string = "STUDENT_LOAD_CURRENT_QUIZ_SUCCESS";
    public studentLoadCurrentQuizSuccess(quiz: QuizState): Action {
        return {
            type: QuizActions.STUDENT_LOAD_CURRENT_QUIZ_SUCCESS,
            payload: quiz
        };
    }
    public static LAUNCH_ANSWERING: string = "LAUNCH_ANSWERING";
    public launchAnswering(): Action {
        return {
            type: QuizActions.LAUNCH_ANSWERING
        };
    }
    public static NEXT_QUESTION: string = "NEXT_QUESTION";
    public nextQuestion(): Action {
        return {
            type: QuizActions.NEXT_QUESTION
        };
    }
    public static PREVIOUS_QUESTION: string = "PREVIOUS_QUESTION";
    public previousQuestion(): Action {
        return {
            type: QuizActions.PREVIOUS_QUESTION
        };
    }
    public static RESET_STUDENT_QUIZ_USAGE: string = "RESET_STUDENT_QUIZ_USAGE";
    public resetQuizUsage(): Action {
        return {
            type: QuizActions.RESET_STUDENT_QUIZ_USAGE
        };
    }
    public static RESET_STUDENT_QUIZ: string = "RESET_STUDENT_QUIZ";
    public resetQuiz(): Action {
        return {
            type: QuizActions.RESET_STUDENT_QUIZ
        };
    }
    public static CHOICE: string = "STUDENT_CLICKED_A_CHOICE";
    public choice(index: number): Action {
        return {
            type: QuizActions.CHOICE,
            payload: index
        };
    }
}
