package com.managementapp.play.controllers

import com.google.inject.Inject
import com.managementapp.play.actions.AuthenticatedAction
import com.managementapp.services.authentication.AuthenticationService
import com.managementapp.services.common.{ProtobufUtil, UserService}
import com.managementapp.transfers.Authentication.TokenDTO
import play.api.mvc.{Action, AnyContent, Controller}
import com.managementapp.transfers.Users._
import play.mvc.Http.MimeTypes
import scala.concurrent.ExecutionContext.Implicits.global

class AuthenticationController @Inject() (authService: AuthenticationService, userService: UserService) extends Controller with ProtobufUtil {
  def sampleActionThatRequiresAuth: Action[AnyContent] = AuthenticatedAction(authService) { request =>
    //this route requires login first
    Ok("Logged in user is: " + request.user.email)
  }

  //create account requires email, username, and password
  def createAccount: Action[AnyContent] = Action {
    request =>
      val account = parseJSONProtocolBuffer[AccountDTO](AccountDTO.newBuilder, request)
      userService.persistNewUser(account.getUsername, account.getPassword, account.getEmail)
      Ok("")
  }

  //login to an account requires email and password
  def login: Action[AnyContent] = Action.async {
    request =>
      val account = parseJSONProtocolBuffer[AccountDTO](AccountDTO.newBuilder, request)
      authService.validateUserPassword(account.getUsername, account.getEmail, account.getPassword).map {
        tokenOpt =>
          if (tokenOpt.isDefined) {
            Ok(generateJSON[TokenDTO](TokenDTO.newBuilder.setToken(tokenOpt.get).build)).as(MimeTypes.JSON)
          }
          else {
            Forbidden
          }
      }
  }
}
