package com.managementapp.database.models

import com.managementapp.database.models.Category.Category

object Category extends Enumeration {
  type Category = Value
  val Avatar, Passport, Insurance = Value
}

case class UserImages (userId: Long, imageId: Long, category: Category)
