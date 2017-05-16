package com.managementapp.play.actions

import com.managementapp.play.requests.AuthenticatedRequest
import com.managementapp.services.authentication.AuthenticationService
import com.managementapp.services.common.CookieConstants
import play.api.mvc._

import scala.concurrent.Future


/**
  * Authenticated action. Use this instead of the default Action class for any route that requires user log-in
  */
case class AuthenticatedAction(authenticationService: AuthenticationService) extends ActionBuilder[AuthenticatedRequest]{

  override def invokeBlock[A](request: Request[A],
                              block: (AuthenticatedRequest[A]) => Future[Result]): Future[Result] = {
    //TODO: Failure could come from invalid token or missing Http Auth Header. Use Scalaz to be more specific about the error
    request
      .cookies
      .get(CookieConstants.TOKEN_COOKIE)
      .map(_.value)
      .flatMap(authenticationService.authenticateToken)
      .map(user => block(new AuthenticatedRequest[A](user, request)))
      .getOrElse(Future.successful(Results.Forbidden.discardingCookies(CookieConstants.DISCARD_ALL_COOKIES: _*))) // token validation failed
  }
}
