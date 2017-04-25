import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {QuizContainerComponent} from "./components/quizContainerComponent";

export const quizRoutes: Routes = [
    {path: "", component: QuizContainerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(quizRoutes)],
    exports: [RouterModule]
})
export class QuizRoutingModule {}
