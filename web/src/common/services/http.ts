import {Http, RequestOptionsArgs, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ErrorDialogService} from "./errorDialogService";
import {ErrorDTOConversions} from "../conversions/errorDTOConversions";
import {MAError} from "../models/errorModels";
import {ErrorMessageDTO} from "../../dto/Error";

@Injectable()
export class MAHttp {
    constructor(private _angularHttp: Http, private _errorService: ErrorDialogService) {}

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return this._angularHttp.post(url, body, options).catch(
            (res: Response, obs: Observable<any>) => {
                const error: MAError = ErrorDTOConversions.toMAError(ErrorMessageDTO.fromObject(res.json()));
                this._errorService.openErrorInfoDialog(error);
                return Observable.throw(error);
            }
        );
    }
}
