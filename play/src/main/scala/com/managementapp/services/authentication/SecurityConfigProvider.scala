package com.managementapp.services.authentication

import java.util.{Calendar, Date}

import com.google.inject.{Inject, Singleton}
import com.managementapp.play.errors.base.exceptions.MAExceptionCode
import com.managementapp.play.errors.common.exceptions.DefaultException
import play.api.Configuration

@Singleton
class SecurityConfigProvider @Inject()(private val configuration: Configuration) {
  //TODO: organize our exceptions
  def getSecurityKey: String =
    configuration
      .getString("play.crypto.secret")
      .getOrElse(throw DefaultException(MAExceptionCode.MA00007, message="Application secret not defined"))

  def getExpiryTime: Date = {
    val cal = Calendar.getInstance //Get the time Now
    //now we will default expiry to be in 3 days,
    // we can provide mechanism to allow this time to be configurable
    cal.add(Calendar.DATE, 3)
    cal.getTime
  }
}