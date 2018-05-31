import {AppState} from "../reducers/reducer";

export type AppStateQuery<R> = (s: AppState) => R;
