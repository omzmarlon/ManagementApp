package com.managementapp.play.errors.common.handlers

import com.managementapp.play.errors.MAErrorResults
import com.managementapp.play.errors.base.handlers.{BaseErrorHandler, ErrorResolver}
import com.managementapp.play.errors.common.exceptions.{DefaultException, InvalidJSONException}

/**
  * Created by omzmarlon on 2017-05-17.
  */
trait CommonErrorHandler extends BaseErrorHandler {
  abstract override def resolveError: ErrorResolver =
    CommonErrorHandler.commonResolver orElse  super.resolveError
}

object CommonErrorHandler {
  val commonResolver: ErrorResolver = {
    case e: InvalidJSONException => MAErrorResults.badRequest(e)
    case e: DefaultException => MAErrorResults.internalServerError(e)
  }
}
