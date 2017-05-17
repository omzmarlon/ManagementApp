package com.managementapp.play.errors.authentication.handlers

import com.managementapp.play.errors.MAErrorResults
import com.managementapp.play.errors.authentication.exceptions.InvalidPasswordException
import com.managementapp.play.errors.base.handlers.{BaseErrorHandler, ErrorResolver}

trait AuthenticationErrorHandler extends BaseErrorHandler {
  abstract override def resolveError: ErrorResolver =
    AuthenticationErrorHandler.authErrorResolver orElse super.resolveError
}

object AuthenticationErrorHandler {
  val authErrorResolver: ErrorResolver = {
    case e: InvalidPasswordException => MAErrorResults.forbidden(e)
  }
}
