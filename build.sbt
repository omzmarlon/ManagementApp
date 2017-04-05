import play.sbt.PlayScala
import PlayKeys.playMonitoredFiles
import Dependencies._

name := """ManagementApp"""


lazy val commonBuildSettings = Seq(
  organization := "com.managementapp",
  version := "0.1.0",
  scalaVersion := "2.11.7"
)

lazy val managementapp_play = (project in file("./play"))
  //this module will have the root controllers
  .settings(commonBuildSettings: _*)
  .settings(libraryDependencies ++= playDeps)
  .settings(libraryDependencies ++= playSlickDeps)
  .settings(libraryDependencies += guice)
  .settings(
    //makes play to find source files in /src folder instead of /app folder
    //refer to https://www.playframework.com/documentation/2.5.x/Anatomy
    //how you can change dir structure
    playMonitoredFiles ++= (sourceDirectories in (Compile, TwirlKeys.compileTemplates)).value,
    playMonitoredFiles ++= Seq(file("./web")) //include directory for static files
  )
  .enablePlugins(PlayScala)
  .disablePlugins(PlayLayoutPlugin)
  .settings(
    //proto-sbt doc:
    // https://github.com/thesamet/sbt-protoc

    //for usage in typescript:
    //http://stackoverflow.com/questions/40561548/protocol-buffers-in-angular-2-project
    //http://dcode.io/protobuf.js/
    libraryDependencies += "com.trueaccord.scalapb" %% "compilerplugin" % "0.5.41",
    PB.targets in Compile := Seq(
      PB.gens.java -> ((sourceDirectory in Compile).value / "protobuf_generated")
    )
  )

lazy val managementapp_core = (project in file("./core"))
  //core module contains business logic and db access
  .settings(commonBuildSettings: _*)