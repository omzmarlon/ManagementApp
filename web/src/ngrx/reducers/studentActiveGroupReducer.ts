import {Action} from "@ngrx/store";
import {StudentActiveGroupState} from "../states/studentActiveGroupState";
import {StudentActiveGroupActions} from "../actions/studentActiveGroupActions";

const initialValue: StudentActiveGroupState = new StudentActiveGroupState();

export default function(state: StudentActiveGroupState = initialValue, action: Action): StudentActiveGroupState {
    switch (action.type) {
        case StudentActiveGroupActions.CHECK_STUDENT_ACTIVE_GROUP:
            return state;
        case StudentActiveGroupActions.REFRESH_STUDENT_ACTIVE_GROUP:
            return state;
        case StudentActiveGroupActions.STUDENT_ACTIVE_GROUP_FOUND:
            return new StudentActiveGroupState(action.payload);
        case StudentActiveGroupActions.STUDENT_ACTIVE_GROUP_NOT_FOUND:
            return new StudentActiveGroupState();
        default:
            return state;
    }
}
