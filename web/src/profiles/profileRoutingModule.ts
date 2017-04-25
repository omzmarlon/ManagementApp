import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProfileContainerComponent} from "./components/profileContainerComponent";

export const profileRoutes: Routes = [
    {path: "", component: ProfileContainerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(profileRoutes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {}
