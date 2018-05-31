package com.managementapp.play.errors.base.handlers

import com.managementapp.play.errors.MAErrorResults

trait BaseErrorHandler {
  def resolveError: ErrorResolver = BaseErrorHandler.errorResolver
}

object BaseErrorHandler {
  val errorResolver: ErrorResolver = {
    case e: Exception => MAErrorResults.internalServerError(e)
  }
}
