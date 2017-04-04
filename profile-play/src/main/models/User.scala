package models

case class User(id: Long, firstName: String, lastName: String, phone: Long, email: String)

class UserTableDef(tag: Tag) extends Table[(Long, String, String, Long, String)](tag, "user") {

  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def firstName = column[String]("first_name")
  def lastName = column[String]("last_name")
  def phone = column[Long]("phone")
  def email = column[String]("email")

  def * = (id, firstName, lastName, phone, email)
}