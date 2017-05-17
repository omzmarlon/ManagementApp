package com.managementapp.play.errors

import com.managementapp.play.errors.base.exceptions.AbstractManagementAppException
import play.api.mvc.{Result, Results}
import com.managementapp.services.common.ProtobufUtil
import com.managementapp.transfers.Error.ErrorMessageDTO
import play.mvc.Http.MimeTypes

/**
  * Wrapped Play Results. Return these in case of an error
  */
object MAErrorResults extends Results with ProtobufUtil {
  def forbidden(e: AbstractManagementAppException): Result = {
    Forbidden(protobufToJSON(e.toProtobufErrorMessage)).as(MimeTypes.JSON)
  }

  def badRequest(e: AbstractManagementAppException): Result = {
    BadRequest(protobufToJSON(e.toProtobufErrorMessage)).as(MimeTypes.JSON)
  }

  def notFound(e: AbstractManagementAppException): Result = {
    NotFound(protobufToJSON(e.toProtobufErrorMessage)).as(MimeTypes.JSON)
  }

  def internalServerError(e: AbstractManagementAppException): Result = {
    InternalServerError(protobufToJSON(e.toProtobufErrorMessage)).as(MimeTypes.JSON)
  }

  def internalServerError(e: Exception): Result = {
    // Handling unexpected server error
    InternalServerError(protobufToJSON(ErrorMessageDTO.newBuilder.setMessage(e.getMessage).build)).as(MimeTypes.JSON)
  }

  // add more methods as necessary...
}
