package com.managementapp.authentication.models

import slick.lifted.Tag
import slick.driver.MySQLDriver.api._


case class User(email: String, password: String)

class UserTable(tag: Tag) extends Table[User](tag, "User") {
  // scalastyle:off public.methods.have.type
  def id = column[Int]("id", O.PrimaryKey, O.AutoInc)
  def email = column[String]("email")
  def password = column[String]("password")
  def * = (email, password) <> (User.tupled, User.unapply)
}
