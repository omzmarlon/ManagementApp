import {AppStateQuery} from "./base";
import {AppState} from "../reducers/reducer";
import {QuizItem, SelectedChoice} from "../states/quizState";
import {Maybe, Some, None} from "monet";
import * as _ from "@types/lodash";

export const quizAvailable: AppStateQuery<boolean> = (s: AppState) => s.studentQuiz.quiz.quizAvailable;
export const isAlreadyAnswered: AppStateQuery<boolean> = (s: AppState) => s.studentQuiz.quiz.alreadyAnswered;
export const notAlreadyAnswered: AppStateQuery<boolean> = (s: AppState) => !s.studentQuiz.quiz.alreadyAnswered;
export const quizName: AppStateQuery<string> = (s: AppState) => s.studentQuiz.quiz.quizName;
export const quizLength: AppStateQuery<number> = (s: AppState) => s.studentQuiz.quiz.items.length;
export const quizItems: AppStateQuery<QuizItem[]> = (s: AppState) => s.studentQuiz.quiz.items;

export const startAnswering: AppStateQuery<boolean> =
    (s: AppState) => s.studentQuiz.quizUsage.startAnswering;

export const notStartAnswering: AppStateQuery<boolean> =
    (s: AppState) => !s.studentQuiz.quizUsage.startAnswering;

export const currentQuestionIndex: AppStateQuery<number> =
    (s: AppState) => s.studentQuiz.quizUsage.currentQuizItemIndex;

export const currentQuestion: AppStateQuery<QuizItem> =
    (s: AppState) => s.studentQuiz.quiz.items[s.studentQuiz.quizUsage.currentQuizItemIndex];

export const selectedChoicesOfCurrentItem: AppStateQuery<Maybe<number>> =
    (s: AppState) => {
        const choice: SelectedChoice =
            _.find(s.studentQuiz.quizUsage.choices, c => c.itemId === s.studentQuiz.quizUsage.currentQuizItemId);
        if (choice) {
            return Some(choice.choice);
        } else {
            return None<number>();
        }
    };
