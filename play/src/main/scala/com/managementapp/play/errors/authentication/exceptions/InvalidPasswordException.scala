package com.managementapp.play.errors.authentication.exceptions

import com.managementapp.play.errors.base.exceptions.{MAExceptionCode, AbstractManagementAppException}
import play.api.http.Status.FORBIDDEN

/**
  * Created by omzmarlon on 2017-05-17.
  */
case class InvalidPasswordException(exCode: MAExceptionCode.MAExceptionCode)
  extends AbstractManagementAppException(
    exceptionCode = exCode,
    status = FORBIDDEN,
    code = "Invalid Password",
    message = ""
  )