import {MAError} from "../models/errorModels";
import {ErrorMessageDTO} from "../../dto/Error";

export class ErrorDTOConversions {
    public static toMAError(errorMsg: ErrorMessageDTO): MAError {
        return new MAError(
            errorMsg.exceptionCode,
            errorMsg.status,
            errorMsg.code,
            errorMsg.message
        );
    }
}
