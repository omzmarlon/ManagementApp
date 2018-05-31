import {Http, RequestOptionsArgs, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable, Subscription} from "rxjs/Rx";
import {ErrorDialogService} from "./errorDialogService";
import {ErrorDTOConversions} from "../conversions/errorDTOConversions";
import {MAError} from "../models/errorModels";
import {ErrorMessageDTO} from "../../dto/Error";
import {SpinnerService} from "../../app-container/spinners/services/spinnerService";

@Injectable()
export class MAHttp {
    constructor(
        private _angularHttp: Http,
        private _errorService: ErrorDialogService,
        private _spinnerService: SpinnerService
    ) {}

    public get(url: string,
               options?: RequestOptionsArgs,
               showGlobalSpinner: boolean = true): Observable<Response> {
        if (showGlobalSpinner) {
            this._spinnerService.showSpinner();
        }
        const resObs: Observable<Response> = this._angularHttp.get(url, options).catch(
            (res: Response, obs: Observable<any>) => {
                if (showGlobalSpinner) {
                    this._spinnerService.hideSpinner();
                }
                const error: MAError = ErrorDTOConversions.toMAError(ErrorMessageDTO.fromObject(res.json()));
                this._errorService.openErrorInfoDialog(error);
                return Observable.throw(error);
            }
        ).share();
        if (showGlobalSpinner) {
            const subs: Subscription = resObs.subscribe(() => this._spinnerService.hideSpinnerAndUnsubscribe(subs));
        }

        return resObs;
    }

    public post(url: string,
                body: any,
                options?: RequestOptionsArgs,
                showGlobalSpinner: boolean = true): Observable<Response> {
        if (showGlobalSpinner) {
            this._spinnerService.showSpinner();
        }
        const resObs: Observable<Response> = this._angularHttp.post(url, body, options).catch(
            (res: Response, obs: Observable<any>) => {
                if (showGlobalSpinner) {
                    this._spinnerService.hideSpinner();
                }
                const error: MAError = ErrorDTOConversions.toMAError(ErrorMessageDTO.fromObject(res.json()));
                this._errorService.openErrorInfoDialog(error);
                return Observable.throw(error);
            }
        ).share();
        if (showGlobalSpinner) {
            const subs: Subscription = resObs.subscribe(() => this._spinnerService.hideSpinnerAndUnsubscribe(subs));
        }
        return resObs;
    }
}
