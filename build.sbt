import play.sbt.PlayScala
import Dependencies._

name := """ManagementApp"""

lazy val managementapp_core = (project in file("./core"))
  //core module contains business logic and db access
  .settings(Commons.settings: _*)

lazy val managementapp_play = (project in file("./play"))
  //this module will have the root controllers
  .settings(Commons.settings: _*)
  .settings(libraryDependencies ++= managementAppPlayDependencies)
  .settings(Web.settings: _*)
  .enablePlugins(PlayScala)
  .disablePlugins(PlayLayoutPlugin)
  .dependsOn(managementapp_core)

lazy val root = (project in file("."))
  .aggregate(managementapp_core, managementapp_play)
  .settings(
    run := {
      (run in managementapp_play in Compile).evaluated
    }
)