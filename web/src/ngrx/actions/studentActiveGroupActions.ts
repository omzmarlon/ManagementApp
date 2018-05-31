import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";

@Injectable()
export class StudentActiveGroupActions {
    /*tslint:disable:member-ordering*/
    public static CHECK_STUDENT_ACTIVE_GROUP: string = "CHECK_STUDENT_ACTIVE_GROUP";
    public checkStudentActiveGroup(): Action {
        return {
            type: StudentActiveGroupActions.CHECK_STUDENT_ACTIVE_GROUP
        };
    }

    public static REFRESH_STUDENT_ACTIVE_GROUP: string = "REFRESH_STUDENT_ACTIVE_GROUP";
    public refreshStudentActiveGroup(): Action {
        return {
            type: StudentActiveGroupActions.REFRESH_STUDENT_ACTIVE_GROUP
        };
    }

    public static STUDENT_ACTIVE_GROUP_FOUND: string = "STUDENT_ACTIVE_GROUP_FOUND";
    public studentActiveGroupFound(groupId: number): Action {
        return {
            type: StudentActiveGroupActions.STUDENT_ACTIVE_GROUP_FOUND,
            payload: groupId
        };
    }

    public static STUDENT_ACTIVE_GROUP_NOT_FOUND: string = "STUDENT_ACTIVE_GROUP_NOT_FOUND";
    public studentActiveGroupNotFound(): Action {
        return {
            type: StudentActiveGroupActions.STUDENT_ACTIVE_GROUP_NOT_FOUND
        };
    }
}
