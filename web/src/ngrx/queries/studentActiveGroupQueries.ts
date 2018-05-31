import {AppStateQuery} from "./base";
import {AppState} from "../reducers/reducer";

export const hasActiveGroup: AppStateQuery<boolean>
    = (s: AppState) => s.studentActiveGroup.hasActiveGroup();
