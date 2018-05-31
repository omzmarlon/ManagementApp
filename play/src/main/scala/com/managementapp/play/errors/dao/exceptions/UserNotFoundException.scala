package com.managementapp.play.errors.dao.exceptions

import com.managementapp.play.errors.base.exceptions.{MAExceptionCode, AbstractManagementAppException}
import play.api.http.Status.NOT_FOUND

/**
  * Created by omzmarlon on 2017-05-17.
  */
case class UserNotFoundException(exCode: MAExceptionCode.MAExceptionCode)
  extends AbstractManagementAppException (
    exceptionCode = exCode,
    status = NOT_FOUND,
    code = "User Not Found",
    message = "User is not found on our system."
  )
