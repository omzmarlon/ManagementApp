import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {QuizContainerComponent} from "./components/quizContainerComponent";
import {HttpModule} from "@angular/http";
import {QuizRoutingModule} from "./quizRoutingModule";

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, QuizRoutingModule],
    declarations: [QuizContainerComponent],
    exports: [QuizContainerComponent],
    providers: []
})
export class QuizModule {}
