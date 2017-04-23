package com.managementapp.play.controllers

import com.google.inject.Inject
import com.managementapp.play.actions.AuthenticatedAction
import com.managementapp.services.authentication.AuthenticationService
import com.managementapp.services.common.{ProtobufUtil, UserService}
import play.api.mvc.{Action, AnyContent, Controller}
import com.managementapp.transfers.Users._
import scala.concurrent.ExecutionContext.Implicits.global

class AuthenticationController @Inject() (authService: AuthenticationService, userService: UserService) extends Controller with ProtobufUtil {
  def sampleActionThatRequiresAuth: Action[AnyContent] = AuthenticatedAction(authService) { request =>
    //this route requires login first
    Ok("Logged in user is: " + request.user.email)
  }

  def createAccount: Action[AnyContent] = Action {
    request =>
      val account = parseJSONProtocolBuffer[AccountDTO](AccountDTO.newBuilder, request)
      userService.persistNewUser(account.getUsername, account.getEmail, account.getPassword)
      Ok("")
  }

  def login: Action[AnyContent] = Action.async {
    request =>
      val account = parseJSONProtocolBuffer[AccountDTO](AccountDTO.newBuilder, request)
      authService.validateUserPassword(account.getUsername, account.getEmail, account.getPassword).map {
        tokenOpt => if (tokenOpt.isDefined) Ok(tokenOpt.get) else Forbidden
      }
  }
}
