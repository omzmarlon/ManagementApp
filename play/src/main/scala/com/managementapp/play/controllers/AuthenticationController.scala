package com.managementapp.play.controllers

import com.google.inject.Inject
import com.managementapp.play.actions.AuthenticatedAction
import com.managementapp.services.authentication.AuthenticationService
import com.managementapp.services.common.{CookieConstants, ProtobufUtil, UserService}
import play.api.mvc._
import com.managementapp.transfers.Users._
import play.mvc.Http.MimeTypes

import scala.concurrent.ExecutionContext.Implicits.global

class AuthenticationController @Inject() (authService: AuthenticationService, userService: UserService) extends Controller with ProtobufUtil {
  def sampleActionThatRequiresAuth: Action[AnyContent] = AuthenticatedAction(authService) { request =>
    //this route requires login first
    Ok("Logged in user is: " + request.user.email + " User id: " + request.user.id)
  }

  //create account requires email, username, and password
  def createAccount: Action[AnyContent] = Action {
    request =>
      val account = jsonToProtobuf[AccountDTO](AccountDTO.newBuilder, request)
      userService.persistNewUser(account.getUsername, account.getPassword, account.getEmail)
      Ok("")
  }

  //login to an account requires email and password
  def login: Action[AnyContent] = Action.async {
    request =>
      val account = jsonToProtobuf[AccountDTO](AccountDTO.newBuilder, request)
      authService.validateUserPassword(account.getEmail, account.getPassword).map {
        case (username, token) =>
          Ok.withCookies(
              Cookie(name=CookieConstants.TOKEN_COOKIE, value=token, httpOnly=true), // sensitive info non-accessible through js
              Cookie(name=CookieConstants.USERNAME_COOKIE, value=username, httpOnly=false)
            )
            .as(MimeTypes.JSON)
      }
  }

  def logout: Action[AnyContent] = AuthenticatedAction(authService) { request =>
    Ok.discardingCookies(CookieConstants.DISCARD_ALL_COOKIES: _*)
  }
}
