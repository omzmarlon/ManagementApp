package com.managementapp.play.errors.base.exceptions

import com.managementapp.play.errors.base.exceptions.MAExceptionCode.MAExceptionCode
import com.managementapp.transfers.Error.ErrorMessageDTO

/**
  * Created by omzmarlon on 2017-05-15.
  */
abstract class AbstractManagementAppException(val exceptionCode: MAExceptionCode.MAExceptionCode,
                                              val status: Int,
                                              val code: String,
                                              val message: String)
  extends Exception(AbstractManagementAppException.formatExceptionMessage(exceptionCode, status, code, message)) {
  def toProtobufErrorMessage: ErrorMessageDTO = {
    ErrorMessageDTO
      .newBuilder
      .setExceptionCode(exceptionCode.toString)
      .setStatus(status)
      .setCode(code)
      .setMessage(message)
      .build
  }
}


object AbstractManagementAppException {
  def formatExceptionMessage(exceptionCode: MAExceptionCode, status: Int, code: String, message: String): String = {
    s"""
      |A ManagementAppException is thrown:
      |Exception code: $exceptionCode
      |Http Status: $status
      |${if (code.nonEmpty) "Code: " + code}
      |${if (message.nonEmpty) "Message: " + message}
    """
  }
}