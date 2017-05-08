import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./containers/components/homeComponent";
import {AuthenticationComponent} from "./authentication/components/authenticationComponent";

export const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full"},
    { path: "authentication", component: AuthenticationComponent, pathMatch: "full"},
    { path: "groups", loadChildren: "assets/target/groups/groupModule#GroupModule" },
    { path: "quizzes", loadChildren: "assets/target/quizzes/quizzesModule#QuizModule" },
    { path: "profiles", loadChildren: "assets/target/profiles/profileModule#ProfileModule" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
