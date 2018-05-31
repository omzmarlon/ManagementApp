package com.managementapp.play.errors.base.exceptions

/**
  * Unique exception code.
  * Every time an exception is thrown, we should define a new unique exception code for it
  * This is for the purpose of uniquely identifying the location of an thrown exception
  */
object MAExceptionCode extends Enumeration {
  type MAExceptionCode = Value
  val
  MA00001, MA00002, MA00003, MA00004, MA00005, MA00006, MA00007
  = Value
}
