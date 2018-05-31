package com.managementapp.play.errors.dao.handlers

import com.managementapp.play.errors.MAErrorResults
import com.managementapp.play.errors.base.handlers.{BaseErrorHandler, ErrorResolver}
import com.managementapp.play.errors.dao.exceptions.{UserAlreadyExistsException, UserNotFoundException}

/**
  * Created by omzmarlon on 2017-05-17.
  */
trait DAOErrorHandlers extends BaseErrorHandler {
  abstract override def resolveError: ErrorResolver =
    DAOErrorHandlers.daoErrorResolver orElse super.resolveError
}

object DAOErrorHandlers {
  val daoErrorResolver: ErrorResolver = {
    case e: UserAlreadyExistsException => MAErrorResults.badRequest(e)
    case e: UserNotFoundException => MAErrorResults.notFound(e)
  }
}
