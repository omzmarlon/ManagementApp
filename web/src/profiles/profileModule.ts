import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProfileContainerComponent} from "./components/profileContainerComponent";
import {HttpModule} from "@angular/http";
import {ProfileRoutingModule} from "./profileRoutingModule";

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, ProfileRoutingModule],
    declarations: [ProfileContainerComponent],
    exports: [ProfileContainerComponent],
    providers: []
})
export class ProfileModule {}
