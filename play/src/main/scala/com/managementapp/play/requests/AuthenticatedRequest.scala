package com.managementapp.play.requests

import com.managementapp.database.models.Users
import play.api.mvc.{Request, WrappedRequest}

import scala.concurrent.Future

/**
  * A request class that will be authenticated
  */
class AuthenticatedRequest[A](val user: Users, val request: Request[A]) extends WrappedRequest[A](request)
