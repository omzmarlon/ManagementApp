package com.managementapp.services.common

import com.google.protobuf.Message
import com.google.protobuf.util.JsonFormat
import com.managementapp.play.errors.base.exceptions.MAExceptionCode
import com.managementapp.play.errors.common.exceptions.InvalidJSONException
import play.api.mvc.{AnyContent, Request}


trait ProtobufUtil {
  def jsonToProtobuf[T <: Message](builder: Message.Builder, request: Request[AnyContent]): T = {
    val json = request.body.asJson.getOrElse(throw InvalidJSONException(MAExceptionCode.MA00004)).toString()
    JsonFormat.parser().merge(json, builder)
    builder.build.asInstanceOf[T]
  }

  def protobufToJSON[M <: Message](content: M): String = {
    JsonFormat.printer().print(content)
  }

}
