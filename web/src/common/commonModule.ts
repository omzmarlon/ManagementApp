import {NgModule} from "@angular/core";
import {MdCardModule, MdButtonModule, MdInputModule, MdProgressSpinnerModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

const sharedModules: any[] = [
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdProgressSpinnerModule
];

@NgModule({
    imports: sharedModules,
    exports: sharedModules

})
export class MACommonModule {}
