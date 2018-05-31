import {NgModule} from "@angular/core";
import {QuizContainerComponent} from "./components/quizContainerComponent";
import {QuizRoutingModule} from "./quizRoutingModule";
import {EmptyQuizComponent} from "./components/student/emptyQuizComponent";
import {MACommonModule} from "../common/commonModule";
import {StudentQuizContainerComponent} from "./components/student/studentQuizContainerComponent";
import {TutorQuizContainerComponent} from "./components/tutor/tutorQuizContainerComponent";
import {StudentPreQuizComponent} from "./components/student/studentPreQuizComponent";
import {StudentQuizItemComponent} from "./components/student/studentQuizItemComponent";

@NgModule({
    imports: [
        QuizRoutingModule,
        MACommonModule
    ],
    declarations: [
        QuizContainerComponent,
        EmptyQuizComponent,
        StudentPreQuizComponent,
        StudentQuizItemComponent,
        StudentQuizContainerComponent,
        TutorQuizContainerComponent
    ],
    providers: []
})
export class QuizModule {}
