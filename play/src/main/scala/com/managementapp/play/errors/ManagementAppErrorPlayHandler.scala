package com.managementapp.play.errors

import com.google.inject.{Inject, Singleton}
import com.managementapp.play.errors.authentication.handlers.AuthenticationErrorHandler
import com.managementapp.play.errors.base.handlers.BaseErrorHandler
import com.managementapp.play.errors.common.handlers.CommonErrorHandler
import com.managementapp.play.errors.dao.handlers.DAOErrorHandlers
import play.api.http.DefaultHttpErrorHandler
import play.api.mvc.{RequestHeader, Result}
import play.api.{Configuration, Environment, UsefulException}

import scala.concurrent.Future

/**
  * Override play's default error handler, give meaningful Result response
  */
@Singleton
class ManagementAppErrorPlayHandler @Inject()(env: Environment, config: Configuration)
  extends DefaultHttpErrorHandler(env, config)
    with BaseErrorHandler
    with CommonErrorHandler
    with AuthenticationErrorHandler
    with DAOErrorHandlers
{
  override def onServerError(request: RequestHeader, exception: Throwable): Future[Result] = {
    exception.printStackTrace()
    Future.successful(resolveError(exception))
  }
}
