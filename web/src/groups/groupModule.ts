import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {GroupContainerComponent} from "./components/groupContainerComponent";
import {HttpModule} from "@angular/http";
import {GroupRoutingModule} from "./groupRoutingModule";
import {MACommonModule} from "../common/commonModule";

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, GroupRoutingModule, MACommonModule],
    declarations: [GroupContainerComponent],
    exports: [GroupContainerComponent],
    providers: []
})
export class GroupModule {}
