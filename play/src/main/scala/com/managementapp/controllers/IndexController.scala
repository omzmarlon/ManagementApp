package com.managementapp.controllers

import com.google.inject.{Inject, Singleton}
import play.Configuration
import play.api.mvc._

@Singleton
class IndexController @Inject()(configuration: Configuration) extends Controller {
  def index = Action { implicit request =>
    Ok(views.html.index())
  }
}