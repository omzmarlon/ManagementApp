import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {CookieService} from "../../common/services/cookieService";
import {Observable} from "rxjs/Rx";
import {Action} from "@ngrx/store";
import {StudentActiveGroupActions} from "../actions/studentActiveGroupActions";
import {Maybe} from "monet";
import {ActiveGroupService} from "../../common/services/activeGroupService";

@Injectable()
export class ActiveGroupEffects {
    // listen on active group check actions,
    // then dispatch found/not found actions to alter StudentActiveGroupState
    @Effect()
    public studentInActiveGroupEffect: Observable<Action> =
        this._actions
            .ofType(StudentActiveGroupActions.CHECK_STUDENT_ACTIVE_GROUP)
            .map(() => this._cookieService.getCurrentGroup())
            .map((group: Maybe<string>) => {
                if (group.isSome()) {
                    return this._studentActiveGroupActions.studentActiveGroupFound(Number(group.some()));
                } else {
                    return this._studentActiveGroupActions.studentActiveGroupNotFound();
                }
            });

    // make request to server to refresh active group status
    // then dispatch checking action
    @Effect()
    public refreshStudentActiveGroupEffect: Observable<Action> =
        this._actions
            .ofType(StudentActiveGroupActions.REFRESH_STUDENT_ACTIVE_GROUP)
            .switchMap(() => this._activeGroupService.refreshActiveGroup())
            .map(() => this._studentActiveGroupActions.checkStudentActiveGroup());

    constructor(
        private _actions: Actions,
        private _cookieService: CookieService,
        private _activeGroupService: ActiveGroupService,
        private _studentActiveGroupActions: StudentActiveGroupActions
    ) {}
}
