import {OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Rx";
import * as _ from "@types/lodash";

export class AbstractBaseComponent implements OnDestroy {
    private _subscriptions: Subscription[];

    constructor() { this._subscriptions = []; }

    public addSubscription(subscriptions: Subscription | Subscription[]): void {
        if (subscriptions instanceof Array) {
            this._subscriptions.push(...subscriptions);
        } else {
            this._subscriptions.push(subscriptions);
        }
    }

    public ngOnDestroy(): void {
        _.forEach(this._subscriptions, subs => subs.unsubscribe());
    }
}
