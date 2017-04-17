package com.managementapp.common.actions

import com.managementapp.common.requests.AuthenticatedRequest
import play.api.mvc.{ActionBuilder, Request, Result, Results}
import play.mvc.Http
import scala.concurrent.Future
import com.managementapp.authentication.services.AuthenticationService


/**
  * Authenticated action. Use this instead of the default Action class for any route that requires user log-in
  */
case class AuthenticatedAction(authenticationService: AuthenticationService) extends ActionBuilder[AuthenticatedRequest]{

  override def invokeBlock[A](request: Request[A],
                              block: (AuthenticatedRequest[A]) => Future[Result]): Future[Result] = {
    //TODO: Failure could come from invalid token or missing Http Auth Header. Use Scalaz to be more specific about the error
    request
      .headers
      .get(Http.HeaderNames.AUTHORIZATION)
      .flatMap(authenticationService.authenticateToken)
      .map(user => block(new AuthenticatedRequest[A](user, request)))
      .getOrElse(Future.successful(Results.Forbidden)) // token validation failed
  }
}
