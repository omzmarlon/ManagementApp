import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {EmptyComponent} from "../common/components/emptyComponent";

export const routes: Routes = [
    { path: "", component: EmptyComponent, pathMatch: "full"},
    { path: "groups", loadChildren: "assets/target/groups/groupModule#GroupModule" },
    { path: "quizzes", loadChildren: "assets/target/quizzes/quizzesModule#QuizModule" },
    { path: "profiles", loadChildren: "assets/target/profiles/profileModule#ProfileModule" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
