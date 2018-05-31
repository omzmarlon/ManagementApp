import {Injectable} from "@angular/core";
import {MAHttp} from "../../common/services/http";
import {Observable} from "rxjs";
import {Quiz} from "../../ngrx/states/quizState";
import {Response} from "@angular/http";
import {ManagementAppRoute} from "../../common/util/routes";
import {StudentQuizConversions} from "../conversions/studentQuizConversion";
import {QuizDTO} from "../../dto/Quiz";

@Injectable()
export class StudentQuizService {

    /**
     * TODO:
     * This file's subscribers need to handle errors otherwise the errors passed from my wrapper MAHttp
     * would be out in the wild, which could leads to web app crash or unexpected behaviours
     * */

    constructor(private _http: MAHttp) {}

    public loadStudentCurrentQuiz(groupId: string): Observable<Quiz> {
        const res: Observable<Response> = this._http.get(ManagementAppRoute.studentGetCurrentQuiz(Number(groupId)));
        return res.map((response: Response) => StudentQuizConversions.toQuiz(QuizDTO.from(response.json())));
    }
}
