import sbt._
import Keys._

object Commons {
  val settings: Seq[Def.Setting[_]] = Seq(
    organization := "com.managementapp",
    version := "0.1.0",
    scalaVersion := "2.11.7",
    resolvers += Resolver.typesafeRepo("releases")
  )
}