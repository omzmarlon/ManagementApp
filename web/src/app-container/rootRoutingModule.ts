import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./containers/components/homeComponent";
import {AuthenticationComponent} from "./authentication/components/authenticationComponent";
import {AuthGuard} from "./authentication/services/authGuard";

export const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full"},
    { path: "authentication", component: AuthenticationComponent, pathMatch: "full"},
    { path: "groups", loadChildren: "assets/target/groups/groupModule#GroupModule", canActivate: [AuthGuard]},
    { path: "quizzes", loadChildren: "assets/target/quizzes/quizzesModule#QuizModule", canActivate: [AuthGuard]},
    { path: "profiles", loadChildren: "assets/target/profiles/profileModule#ProfileModule", canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
