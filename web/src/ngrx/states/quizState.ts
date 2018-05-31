import * as moment from "moment";

export class QuizState {
    constructor(
        public quiz: Quiz = new Quiz(-1, "", -1, [], false, true),
        public quizUsage: StudentQuizUsage = new StudentQuizUsage()
    ) {}
}

export class Quiz {
    constructor(
        public id: number,
        public quizName: string,
        public score: number,
        public items: QuizItem[],
        public quizAvailable: boolean,
        public alreadyAnswered: boolean,
        // When tutor query for all quizzes
        public createdBy?: string,
        public createdAt?: moment.Moment,
        // when student request for current available quiz
        public startAt?: moment.Moment,
        public endAt?: moment.Moment
    ) {}
}

export class QuizItem {
    constructor(
        public id: number,
        public body: string,
        public choices: Choice[],
        // when tutor ask for quiz items
        public answers: number[]
    ) {}
}

export class Choice {
    constructor(
        public index: number,
        public choice: string
    ) {}
}

export class StudentQuizUsage {
    constructor(
        public startAnswering: boolean = false,
        public currentQuizItemId: number = -1,
        public currentQuizItemIndex: number = 0,
        public choices: SelectedChoice[] = []
    ) {}
}

export class SelectedChoice {
    constructor(
        public itemId: number,
        public choice: number
    ) {}
}
