import sbt._

// dependencies are ordered alphabetically
object Dependencies {
  val guice : ModuleID = "com.google.inject" % "guice" % "3.0"

  val playFramework : Seq[ModuleID] = Seq(
    "com.typesafe.play" % "play_2.11" % "2.5.13" % Compile,
    "com.typesafe.play" % "play-json_2.11" % "2.5.13"
  )

  /*
   * play-slick library brings along the Slick library as a transitive dependency.
   * This implies we don’t need to add an explicit dependency on Slick,
   * but we might still do so if want.
   */
  val playSlick : Seq[ModuleID] = Seq(
    "mysql" % "mysql-connector-java" % "5.1.39",
    "com.typesafe.play" %% "play-slick" % "2.0.0",
    "com.typesafe.play" %% "play-slick-evolutions" % "2.0.0"
  )


  val protobuf : ModuleID = "com.trueaccord.scalapb" %% "compilerplugin" % "0.5.41"
  val protobufUtil: ModuleID = "com.google.protobuf" % "protobuf-java-util" % "3.2.0"

  // java JWT library
  val javaJWT: ModuleID = "io.jsonwebtoken" % "jjwt" % "0.7.0"

  //java library for encryption
  val jasypt: ModuleID = "org.jasypt" % "jasypt" % "1.9.2"

  // dependency composition for modules
  val managementAppPlayDependencies : Seq[ModuleID] = ((((guice +: playFramework) ++ playSlick :+ protobuf) :+ javaJWT) :+ jasypt) :+ protobufUtil
}