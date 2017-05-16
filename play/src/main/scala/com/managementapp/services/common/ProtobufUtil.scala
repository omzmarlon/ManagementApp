package com.managementapp.services.common

import com.google.protobuf.Message
import com.google.protobuf.util.JsonFormat
import play.api.mvc.{AnyContent, Request}


trait ProtobufUtil {
  def jsonToProtobuf[T <: Message](builder: Message.Builder, request: Request[AnyContent]): T = {
    //TODO: organize our exceptions
    //TODO: properly handle invalid body type (invalid json? format non-json?)
    val json = request.body.asJson.getOrElse(throw new Exception("Invalid JSON")).toString()
    JsonFormat.parser().merge(json, builder)
    builder.build.asInstanceOf[T]
  }

  def protobufToJSON[M <: Message](content: M): String = {
    JsonFormat.printer().print(content)
  }

}
