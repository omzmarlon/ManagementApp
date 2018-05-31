package com.managementapp.services.authentication

import com.google.inject.Inject
import com.managementapp.database.dao.UsersDAO
import com.managementapp.database.models.Users
import com.managementapp.play.errors.authentication.exceptions.InvalidPasswordException
import com.managementapp.play.errors.base.exceptions.MAExceptionCode
import com.managementapp.play.errors.dao.exceptions.UserNotFoundException
import org.jasypt.util.password.BasicPasswordEncryptor

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.duration.Duration
import scala.concurrent.{Await, Future}

/**
  * Created by omzmarlon on 2017-04-14.
  */
class AuthenticationService @Inject() (private val userDAO: UsersDAO, private val tokenService: TokenService) {
  private val encryptor = new BasicPasswordEncryptor //TODO: maybe use more sophisticated encryptor in the future

  /**
    * @return (username string, token string) tuple
    * */
  def validateUserPassword(email: String, password: String): Future[(String, String)] = {
    userDAO.findUserByEmail(email).map {
      userOpt =>
        if (encryptor.checkPassword(password, userOpt.getOrElse(throw UserNotFoundException(MAExceptionCode.MA00002)).password)) {
          (userOpt.get.username, tokenService.generateToken(userOpt.get))
        } else {
          throw InvalidPasswordException(MAExceptionCode.MA00001)
        }
    }
  }

  /**
    * @param password - user password
    * @return encrypted password
    * */
  def encryptUserPassword(password: String): String = encryptor.encryptPassword(password)

  def authenticateToken(token: String): Option[Users] = {
    tokenService.getTokenSubject(token).flatMap { subject => Await.result(userDAO.findUserByEmail(subject), Duration.Inf) }
  }
}
