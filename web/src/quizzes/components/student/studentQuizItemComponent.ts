import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter} from "@angular/core";
import {Choice, QuizItem} from "../../../ngrx/states/quizState";
import {AfterViewInit, OnDestroy} from "@angular/core";
import {InfoBarService} from "../../../common/services/infoBarService";

@Component({
    selector: "student-quiz-item",
    templateUrl: "assets/target/quizzes/components/student/studentQuizItem.ng.html",
    styleUrls: ["assets/target/quizzes/components/student/studentQuizItem.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentQuizItemComponent implements AfterViewInit, OnDestroy {
    @Input("quizName")public quizName: string;
    @Input("quizLength")public quizLength: number;
    @Input("currentIndex")public currentIndex: number;
    @Input("quizItem")public quizItem: QuizItem;
    @Input("selectedChoice")public selectedChoice: number;
    @Output("previousQuestion")public previousQuestionEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output("nextQuestion")public nextQuestionEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output("exit")public exitEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output("choice")public choiceEvent: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        private _infoBarService: InfoBarService
    ) {}

    public ngAfterViewInit(): void {
        setTimeout(
            // trigger change detection on purpose
            // because we change sth in the AfterViewInitHook
            () => this._infoBarService.notifyInfo("Quizzes launched!"),
            1
        );
    }

    public ngOnDestroy(): void {
        this.exitEvent.emit(true);
    }

    public get quizItemChoices(): Choice[] {
        return this.quizItem.choices;
    }

    public get quizTitle(): string {
        return this.quizName;
    }

    public get quizItemBody(): string {
        return this.quizItem.body;
    }

    public get isFirstQuestion(): boolean {
        return this.currentIndex === 0;
    }

    public get isLastQuestion(): boolean {
        return this.currentIndex === (this.quizLength - 1);
    }

    public previousQuestion(): void {
        this.previousQuestionEvent.emit(true);
    }

    public nextQuestion(): void {
        this.nextQuestionEvent.emit(true);
    }

    public clickChoice(index: number): void {
        this.choiceEvent.emit(index);
    }

    public isSelected(index: number): boolean {
        return this.selectedChoice === index;
    }
}
