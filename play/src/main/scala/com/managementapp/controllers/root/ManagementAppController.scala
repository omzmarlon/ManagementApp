package com.managementapp.controllers.root

import com.google.inject.{Inject, Singleton}
import play.Configuration
import play.api.mvc._

@Singleton
class ManagementAppController @Inject() (configuration: Configuration) extends Controller {
  def index = Action { implicit request =>
    Ok(views.html.index())
  }
}