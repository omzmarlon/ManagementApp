package com.managementapp.services.common

import play.api.mvc.DiscardingCookie

/**
  * Created by omzmarlon on 2017-05-16.
  */
object CookieConstants {
  val TOKEN_COOKIE: String = "token"
  val USERNAME_COOKIE: String = "username"
  val CURRENT_GROUP_ID_COOKIE: String = "current_group_id"
  val IS_TUTOR_COOKIE: String = "is_tutor"
  val DISCARD_ALL_COOKIES: IndexedSeq[DiscardingCookie] = IndexedSeq(
    DiscardingCookie(CookieConstants.TOKEN_COOKIE),
    DiscardingCookie(CookieConstants.USERNAME_COOKIE),
    DiscardingCookie(CookieConstants.CURRENT_GROUP_ID_COOKIE),
    DiscardingCookie(CookieConstants.IS_TUTOR_COOKIE)
  )
}
