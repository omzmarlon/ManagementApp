package com.managementapp.authentication.dao

import com.google.inject.Inject
import com.managementapp.authentication.models.{User, UserTable}
import com.managementapp.common.util.ManagementAppDatabase
import slick.driver.MySQLDriver.api._

import scala.concurrent.Future
import play.api.db.slick.DatabaseConfigProvider


class UsersAsyncDAO @Inject()(val configProvider: DatabaseConfigProvider) extends ManagementAppDatabase {

  private val users = TableQuery[UserTable]

  def findUserByEmail(email: String): Future[Option[User]] = {
    execute(users.filter(_.email === email).result.headOption)
  }

  def persistNewUser(user: User): Unit = {
    execute(users += user)
  }
}
