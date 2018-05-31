package com.managementapp.play.errors.dao.exceptions

import com.managementapp.play.errors.base.exceptions.{MAExceptionCode, AbstractManagementAppException}
import play.api.http.Status.BAD_REQUEST

/**
  * Created by omzmarlon on 2017-05-17.
  */
case class UserAlreadyExistsException(exCode: MAExceptionCode.MAExceptionCode)
  extends AbstractManagementAppException (
    exceptionCode = exCode,
    status = BAD_REQUEST,
    code = "User Already Exists",
    message = "User already exists. Please use a different email/username"
  )
