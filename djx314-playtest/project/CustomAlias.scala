package cn.gov.heshan.sbt

import sbt._
import Keys._

object CustomAlias {
  
  val runMainAlias = Map(
    "eclipseWithSource" -> "eclipse with-source=true",
    "ideaWithSource" -> "idea with-sources=yes"
  )
  
  def addRunMainAlias = {
    runMainAlias.toList.foldLeft(Nil: List[Def.Setting[_]]){ (s, t) => s ++ addCommandAlias(t._1, t._2) }
  }
  
  def addGitAlias = {
    if (OSName.isWindows) {
      addCommandAlias("windowsGitInit",
      """|;
        |git config --global i18n.commitencoding utf-8;
        |git config --global i18n.logoutputencoding gbk;
        |git config --global core.autocrlf true;
        |git config core.editor \"extras/npp.6.5.1/startNote.bat\"
      """.stripMargin)
    } else if (OSName.isLinux) {
      addCommandAlias("linuxGitInit",
      """|;
        |git config --global i18n.commitencoding utf-8;
        |git config --global i18n.logoutputencoding utf-8;
        |git config --global core.autocrlf true;
        |git config core.editor gedit
      """.stripMargin)
    } else {
      Nil
    }
  }
  
}
