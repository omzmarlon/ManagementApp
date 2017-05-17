package com.managementapp.play.errors.base

import play.api.mvc.Result

package object handlers {
  /**
    * ErrorResolver is a partial function that turns a thrown exception to a Play result
    * */
  type ErrorResolver = PartialFunction[Throwable, Result]
}
