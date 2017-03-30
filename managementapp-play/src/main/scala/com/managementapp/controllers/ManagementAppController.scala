package com.managementapp.controllers

import com.google.inject.{Inject, Singleton}
import play.api.mvc._
import play.Configuration

@Singleton
class ManagementAppController @Inject() (configuration: Configuration) extends Controller {
  def index = Action { request =>
    Ok("abc")
  }
}