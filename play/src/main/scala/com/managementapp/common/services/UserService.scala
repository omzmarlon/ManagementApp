package com.managementapp.common.services

import com.google.inject.Inject
import com.managementapp.authentication.dao.UsersAsyncDAO
import com.managementapp.authentication.models.User
import com.managementapp.authentication.services.AuthenticationService
import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.{Failure, Success}

class UserService @Inject() (private val userDAO: UsersAsyncDAO, private val authService: AuthenticationService) {
  def persistNewUser(email: String, password: String): Unit = {
    //TODO: provider better error reporting to this method
    userDAO.findUserByEmail(email).onComplete {
      case Success(userOpt) =>
        if (userOpt.isDefined) {
          throw new Exception("User Already Exist")
        } else {
          userDAO.persistNewUser(User(email, authService.encryptUserPassword(password)))
        }
      case Failure(e) => throw new Exception(e.getMessage) //TODO: organize our exceptions
    }
  }
}
