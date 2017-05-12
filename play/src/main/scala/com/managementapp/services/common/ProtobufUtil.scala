package com.managementapp.services.common

import com.google.protobuf.Message
import com.google.protobuf.util.JsonFormat
import play.api.mvc.{AnyContent, Request}


trait ProtobufUtil {
  def parseJSONProtocolBuffer[T <: Message](builder: Message.Builder, request: Request[AnyContent]): T = {
    //TODO: organize our exceptions
    //TODO: properly handle invalid body type (invalid json? format non-json?)
    val json = request.body.asJson.getOrElse(throw new Exception("Invalid JSON")).toString()
    JsonFormat.parser().merge(json, builder)
    builder.build.asInstanceOf[T]
  }

  def generateJSON[M <: Message](content: M): String = {
    JsonFormat.printer().print(content)
  }

}
