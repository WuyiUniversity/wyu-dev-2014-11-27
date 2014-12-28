scalaVersion in ThisBuild := "2.11.4"

import cn.gov.heshan.sbt.CustomAlias

import cn.gov.heshan.sbt.OSName

import com.typesafe.sbt.SbtGit._

name := "playtest"

version := "0.0.1"

EclipseKeys.skipParents in ThisBuild := false

lazy val root = Project(
  id = "playtest",
  base = file("."),
  settings = Defaults.coreDefaultSettings
  ++ CustomAlias.addGitAlias
  ++ CustomAlias.addRunMainAlias
).enablePlugins(PlayScala).settings(
  libraryDependencies ++= {
    Seq(
      "com.typesafe.play" %% "play-slick" % "0.8.1"
    )
  }
)