package com.managementapp.play.errors.common.exceptions

import com.managementapp.play.errors.base.exceptions.{MAExceptionCode, AbstractManagementAppException}
import play.api.http.Status.INTERNAL_SERVER_ERROR

/**
  * Created by omzmarlon on 2017-05-17.
  */
case class DefaultException(override val exceptionCode: MAExceptionCode.MAExceptionCode,
                            override val status: Int = INTERNAL_SERVER_ERROR,
                            override val code: String = "",
                            override val message: String = "") extends
  AbstractManagementAppException(
    exceptionCode = exceptionCode,
    status = status,
    code = code,
    message = message
  )