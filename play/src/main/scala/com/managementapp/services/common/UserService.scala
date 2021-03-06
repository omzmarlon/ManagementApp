package com.managementapp.services.common

import com.google.inject.Inject
import com.managementapp.database.dao.UsersDAO
import com.managementapp.database.models.Users
import com.managementapp.play.errors.base.exceptions.MAExceptionCode
import com.managementapp.play.errors.common.exceptions.DefaultException
import com.managementapp.play.errors.dao.exceptions.UserAlreadyExistsException
import com.managementapp.services.authentication.AuthenticationService
import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.{Failure, Success}

class UserService @Inject() (private val userDAO: UsersDAO, private val authService: AuthenticationService) {
  def persistNewUser(username: String, password: String, email: String): Unit = {
    userDAO.findUserByEmail(email).onComplete {
      case Success(userOpt) =>
        if (userOpt.isDefined) {
          throw UserAlreadyExistsException(MAExceptionCode.MA00003)
        } else {
          userDAO.add(Users(username, authService.encryptUserPassword(password), email))
        }
      case Failure(e) => throw DefaultException(MAExceptionCode.MA00005, message=e.getMessage)
    }
  }
}
