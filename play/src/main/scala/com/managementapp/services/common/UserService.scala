package com.managementapp.services.common

import com.google.inject.Inject
import com.managementapp.database.dao.UsersDAO
import com.managementapp.database.models.Users
import com.managementapp.services.authentication.AuthenticationService

import scala.concurrent.ExecutionContext.Implicits.global
import scala.util.{Failure, Success}

class UserService @Inject() (private val userDAO: UsersDAO, private val authService: AuthenticationService) {
  def persistNewUser(email: String, password: String): Unit = {
    //TODO: provider better error reporting to this method
    userDAO.findUserByEmail(email).onComplete {
      case Success(userOpt) =>
        if (userOpt.isDefined) {
          throw new Exception("User Already Exist")
        } else {
          userDAO.persistNewUser(Users(email, authService.encryptUserPassword(password)))
        }
      case Failure(e) => throw new Exception(e.getMessage) //TODO: organize our exceptions
    }
  }
}
