import {Maybe, None, Some} from "monet";

export class StudentActiveGroupState {
    private _groupId: Maybe<number> = None<number>();

    constructor(groupId?: number) {
        if (groupId) {
            this._groupId = Some(groupId);
        }
    }

    public hasActiveGroup(): boolean {
        return this._groupId.isSome();
    }

    public getGroupId(): number {
        return this._groupId.isSome() ? this._groupId.some() : -1;
    }
}
