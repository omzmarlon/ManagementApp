import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GroupContainerComponent} from "./components/groupContainerComponent";

export const groupRoutes: Routes = [
    {path: "", component: GroupContainerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(groupRoutes)],
    exports: [RouterModule]
})
export class GroupRoutingModule {}
