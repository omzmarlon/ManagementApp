import {QuizState} from "../states/quizState";
import {combineReducers} from "@ngrx/store";
import {compose} from "@ngrx/core";
import studentQuizReducer from "./quizReducer";
import studentActiveGroupReducer from "./studentActiveGroupReducer";
import {StudentActiveGroupState} from "../states/studentActiveGroupState";

/*tslint:disable:interface-name*/
export interface AppState {
    studentQuiz: QuizState;
    studentActiveGroup: StudentActiveGroupState;
}

export default compose(combineReducers)({
    studentQuiz: studentQuizReducer,
    studentActiveGroup: studentActiveGroupReducer
});
