package com.managementapp.play.controllers

import com.google.inject.{Inject, Singleton}
import play.Configuration
import play.api.mvc._

@Singleton
class IndexController @Inject()(configuration: Configuration) extends Controller {
  def index: Action[AnyContent] = Action { implicit request =>
    Ok(views.html.index())
  }
}