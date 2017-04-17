package com.managementapp.authentication.controllers

import play.api.mvc.{Action, AnyContent, Controller}
import com.managementapp.common.actions.AuthenticatedAction
import com.google.inject.Inject
import com.managementapp.common.util.ProtobufUtil
import com.managementapp.transfers.Authentication.AccountDTO
import com.managementapp.authentication.services.AuthenticationService
import com.managementapp.common.services.UserService
import scala.concurrent.ExecutionContext.Implicits.global

class AuthenticationController @Inject() (authService: AuthenticationService, userService: UserService) extends Controller with ProtobufUtil {
  def sampleActionThatRequiresAuth: Action[AnyContent] = AuthenticatedAction(authService) { request =>
    //this route requires login first
    Ok("Logged in user is: " + request.user.email)
  }

  def createAccount: Action[AnyContent] = Action {
    request =>
      val account = parseJSONProtocolBuffer[AccountDTO](AccountDTO.newBuilder, request)
      userService.persistNewUser(account.getEmail, account.getPassword)
      Ok("")
  }

  def login: Action[AnyContent] = Action.async {
    request =>
      val account = parseJSONProtocolBuffer[AccountDTO](AccountDTO.newBuilder, request)
      authService.validateUserPassword(account.getEmail, account.getPassword).map {
        tokenOpt => if (tokenOpt.isDefined) Ok(tokenOpt.get) else Forbidden
      }
  }
}
