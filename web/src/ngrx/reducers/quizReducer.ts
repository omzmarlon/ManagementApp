import {QuizState, SelectedChoice, StudentQuizUsage} from "../states/quizState";
import {Action} from "@ngrx/store";
import {QuizActions} from "../actions/quizActions";
import * as _ from "@types/lodash";

const initialState: QuizState = new QuizState();

export default function(state: QuizState = initialState, action: Action): QuizState {
    switch (action.type) {
        case QuizActions.STUDENT_LOAD_CURRENT_QUIZ:
            return state;
        case QuizActions.STUDENT_LOAD_CURRENT_QUIZ_SUCCESS:
            return action.payload;
        case QuizActions.LAUNCH_ANSWERING:
            return new QuizState(
                state.quiz,
                new StudentQuizUsage(
                    true,
                    state.quiz.items[0].id, // the first item's id
                    state.quizUsage.currentQuizItemIndex,
                    state.quizUsage.choices
                )
            );
        case QuizActions.NEXT_QUESTION:
            const nextNewIndex: number = state.quizUsage.currentQuizItemIndex + 1;
            return new QuizState(
                state.quiz,
                new StudentQuizUsage(
                    state.quizUsage.startAnswering,
                    state.quiz.items[nextNewIndex].id,
                    nextNewIndex,
                    state.quizUsage.choices
                )
            );
        case QuizActions.PREVIOUS_QUESTION:
            const prevNewIndex: number = state.quizUsage.currentQuizItemIndex - 1;
            return new QuizState(
                state.quiz,
                new StudentQuizUsage(
                    state.quizUsage.startAnswering,
                    state.quiz.items[prevNewIndex].id,
                    prevNewIndex,
                    state.quizUsage.choices
                )
            );
        case QuizActions.RESET_STUDENT_QUIZ_USAGE:
            return new QuizState(state.quiz, new StudentQuizUsage());
        case QuizActions.RESET_STUDENT_QUIZ:
            return new QuizState(); // if quiz reset, usage must be reset
        case QuizActions.CHOICE:
            let found: boolean = false;
            const selectedChoices: SelectedChoice[] = _.map(
                state.quizUsage.choices,
                (c: SelectedChoice) => {
                    if (c.itemId === state.quizUsage.currentQuizItemId) {
                        found = true;
                        return new SelectedChoice(c.itemId, action.payload);
                    } else {
                        return c;
                    }
                }
            );
            if (!found) {
                return new QuizState(
                    state.quiz,
                    new StudentQuizUsage(
                        state.quizUsage.startAnswering,
                        state.quizUsage.currentQuizItemId,
                        state.quizUsage.currentQuizItemIndex,
                        [
                            ...selectedChoices,
                            new SelectedChoice(state.quizUsage.currentQuizItemId, action.payload)
                        ]
                    )
                );
            } else {
                return new QuizState(
                    state.quiz,
                    new StudentQuizUsage(
                        state.quizUsage.startAnswering,
                        state.quizUsage.currentQuizItemId,
                        state.quizUsage.currentQuizItemIndex,
                        selectedChoices
                    )
                );
            }
        default:
            return state;
    }
}
