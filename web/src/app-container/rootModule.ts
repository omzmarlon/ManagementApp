import { NgModule } from "@angular/core";
import { AppContainerComponent } from "./containers/components/appContainerComponent";
import {AppRoutingModule} from "./rootRoutingModule";
import {MACommonModule} from "../common/commonModule";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {HomeComponent} from "./containers/components/homeComponent";
import {AuthenticationComponent} from "./authentication/components/authenticationComponent";
import {AuthGuard} from "./authentication/services/authGuard";
import {MAHttp} from "../common/services/http";
import {AuthenticationService} from "./authentication/services/authenticationService";
import {SpinnerService} from "./spinners/services/spinnerService";
import {SpinnerAnchor, SpinnerComponent} from "./spinners/components/spinnerComponent";
import {ErrorDialogService} from "../common/services/errorDialogService";
import {ErrorInfoReportComponent} from "../common/components/errorReportComponent";
import {CookieService} from "../common/services/cookieService";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {QuizEffects} from "../ngrx/effects/quizEffects";
import reducer from "../ngrx/reducers/reducer";
import {ActiveGroupEffects} from "../ngrx/effects/activeGroupEffects";
import {QuizActions} from "../ngrx/actions/quizActions";
import {StudentActiveGroupActions} from "../ngrx/actions/studentActiveGroupActions";
import {StudentQuizService} from "../quizzes/services/studentQuizService";
import {ActiveGroupService} from "../common/services/activeGroupService";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InfoBarService} from "../common/services/infoBarService";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

const effects = [QuizEffects, ActiveGroupEffects];
const actions = [QuizActions, StudentActiveGroupActions];

@NgModule({
    declarations: [AppContainerComponent, HomeComponent, AuthenticationComponent, SpinnerAnchor, SpinnerComponent],
    imports: [
        AppRoutingModule,
        MACommonModule,
        BrowserModule, // browser modules have to say in root module
        BrowserAnimationsModule, // browser modules have to say in root module
        StoreModule.provideStore(reducer),
        ...effects.map(e => EffectsModule.run(e)),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ], // feature modules to be loaded async
    bootstrap: [AppContainerComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        AuthGuard,
        MAHttp, // MAHttp needs to be provided globally because it does error-handling for the entire application
        AuthenticationService,
        SpinnerService,
        ErrorDialogService,
        InfoBarService,
        CookieService,
        ...actions,
        StudentQuizService,
        ActiveGroupService
    ],
    // An entry component is any component that Angular loads imperatively by type rather than by selector
    entryComponents: [SpinnerComponent, ErrorInfoReportComponent]
})
export class AppModule {}
