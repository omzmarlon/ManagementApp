import {QuizDTO, QuizItemDTO} from "../../dto/Quiz";
import {Choice, QuizItem, Quiz} from "../../ngrx/states/quizState";
import * as _ from "@types/lodash";
import * as moment from "moment";

export class StudentQuizConversions {
    public static toQuiz(dto: QuizDTO): Quiz {
        return new Quiz(
            Number(dto.id),
            dto.quizName,
            dto.score,
            _.map(dto.items, StudentQuizConversions.toQuizItem),
            dto.quizAvailable,
            dto.alreadyAnswered,
            dto.createdBy,
            moment(dto.createdAt as number),
            moment(dto.startAt as number),
            moment(dto.endAt as number)
        );
    }

    public static toQuizItem(dto: QuizItemDTO): QuizItem {
        return new QuizItem(
            dto.id as number,
            dto.body,
            JSON.parse(dto.choices) as Choice[],
            JSON.parse(dto.answers) as number[]
        );
    }
}
