package com.managementapp.play.errors.common.exceptions

import com.managementapp.play.errors.base.exceptions.MAExceptionCode.MAExceptionCode
import com.managementapp.play.errors.base.exceptions.AbstractManagementAppException
import play.api.http.Status.BAD_REQUEST

/**
  * Created by omzmarlon on 2017-05-17.
  */
case class InvalidJSONException(exCode: MAExceptionCode)
  extends AbstractManagementAppException(
    exceptionCode = exCode,
    status = BAD_REQUEST,
    code = "Invalid JSON",
    message = ""
  )
