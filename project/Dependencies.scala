import sbt._
import Keys._

object Dependencies {
  val slickDeps = Seq(
    "com.typesafe.slick" %% "slick" % "3.2.0",
    "org.slf4j" % "slf4j-nop" % "1.6.4",
    "com.typesafe.slick" %% "slick-hikaricp" % "3.2.0"
  )
  val guice = "com.google.inject" % "guice" % "3.0"
  val playDeps = Seq(
    "com.typesafe.play" % "play_2.11" % "2.5.13" % Compile,
    "com.typesafe.play" % "play-json_2.11" % "2.5.13"
  )
}