package com.managementapp.play.requests

import com.managementapp.database.models.User
import play.api.mvc.{Request, WrappedRequest}

import scala.concurrent.Future

/**
  * A request class that will be authenticated
  */
class AuthenticatedRequest[A](val user: User, val request: Request[A]) extends WrappedRequest[A](request)
