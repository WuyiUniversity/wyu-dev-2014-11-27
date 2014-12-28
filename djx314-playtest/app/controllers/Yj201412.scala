package controllers

object Yj201412 extends App {

  //所谓的完全面向对象
  //类型推断
  val a1 = 1
  val a2 = "邑大开发者"
  val a3 = 33.06
  var a10 = 2345
  a10 = 4432
  
  val a12 = - 13
  val a13 = 13.unary_-
  
  case class a14() {
    def unary_- = "英爷萌萌哒"
  }
  val a15 = a14()
  val a16 = - a15
  
  object a29 {
    def apply(num: Int) = { num + 1 }
  }
  a29(2333)
  
  object a17 {
    
    def unary_- = "志雄萌萌哒"
    
    def mmd = 2333
    def mmd_= (num: Int) = num + 1
    
  }
  val a18 = - a17
  val a19 = a17.mmd = 32
  val a20 = {a17.mmd = 2333}
  lazy val a21 = {a17.mmd = 234}
  a21
  
  val a4 = List("英", "爷", "，", "正", "面", "上", "我")
  a4.foreach(print)
  a4 foreach print
  
  val a5 = "来" :: "啊" :: "，" :: a4 ::: ("啊" :: "！" :: Nil)
  a5.foreach(s => print(s))
  a4
  
  val a6 = a5 ::: List("来", "啊", "！")
  for (s <- a6) { print(s) }
  for (s <- a6) print(s)
  a5
  
  case class a7(id: Long, name: String, password: String) {
    def foreach(f: Long => String) = {
      f(id)
    }
  }
  
  val a8 = for (a9 <- a7(23, "喵", "英爷")) {
    "2333"
  }
  
  val a9 = for {t <- a7(2333, "喵", "英爷")} s"英爷的id是${t}"
  
  val a11 = a7(2333, "喵", "英爷").foreach{ case t => s"英爷的id是${t}" }
  
  //把List("11", "22", "33", "44", "55", "66", "77", "88", "99")变成List(44, 66)
  val a22 = for (i <- 1 to 9) yield (i * 11).toString
  val a23 = 1 to 9 map{ case i => (i * 11).toString }
  val a24 = 1 to 9 map { _ * 11 } map { _.toString }  //纯属演示
  
  val a25 = a22.map(_.toInt).filter(s => s % 2 == 0).drop(1).dropRight(1)
  
  val a26 = (for { i <- a22 if i.toInt % 2 == 0 } yield { i.toInt }).drop(1).dropRight(1)
  
  val a27 = a22.collect{ case i if i.toInt % 2 == 0 => i.toInt }.drop(1).dropRight(1)
  
  case class a28(name: String, password: String)
  
  val a30 = a28("英爷", "志雄")
  
  val a35 = a30 match {
    case a28(a, b) => a + b
    case _ => ""
  }
  a35
  
  val a28(a31, a32) = a30
  a31
  a32
  
  val a33 = a28("师兄", "志雄（又是你）")
  val a34 = a30 :: a33 :: Nil
  val a36 = for (a28(a, b) <- a34) yield a
  
  def a37(id: Long)(name: String)(password: String) = {
    Map(id -> (name + password))
  }
  
  val a38 = a37(23)("英爷")("志雄")
  
  val a39 = a37(23) _
  val a40 = a39("英爷")("志雄")
  
}