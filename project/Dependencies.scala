import sbt._
import Keys._

object Dependencies {
  /*
   * play-slick library brings along the Slick library as a transitive dependency.
   * This implies we don’t need to add an explicit dependency on Slick,
   * but we might still do so if want.
   */
  val playSlickDeps = Seq(
    "mysql" % "mysql-connector-java" % "5.1.39",
    "com.typesafe.play" %% "play-slick" % "2.0.0",
    "com.typesafe.play" %% "play-slick-evolutions" % "2.0.0"
//    "com.typesafe.slick" %% "slick" % "3.1.0",
//    "org.slf4j" % "slf4j-nop" % "1.6.4",
//    "com.typesafe.slick" %% "slick-hikaricp" % "3.1.0"
  )
  val guice = "com.google.inject" % "guice" % "3.0"
  val playDeps = Seq(
    "com.typesafe.play" % "play_2.11" % "2.5.13" % Compile,
    "com.typesafe.play" % "play-json_2.11" % "2.5.13"
  )
}