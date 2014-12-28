package controllers

import play.api._
import play.api.mvc._

object Christmas extends Controller {
  
  def happy(id: Long) = Action { implicit request =>
    Ok(views.html.miao(id))
  }
  
}