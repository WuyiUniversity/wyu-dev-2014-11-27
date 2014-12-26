使用PHP内置函数
---

1. 随机生成2组10000个数字[1,10000]并合并

```shell

jayin:ex1 jayin$ time php good1s.php

real    0m0.117s
user    0m0.103s
sys     0m0.012s
jayin:ex1 jayin$ time php good1.php

real    0m0.143s
user    0m0.121s
sys     0m0.013s
jayin:ex1 jayin$ time php bad1.php

real    0m1.979s
user    0m1.917s
sys     0m0.028s

```


2. 善用函数：不同函数之间也有不同效率(实现方式不一样)

以isset()array_key_exists()为例

```shell

jayin:ex1 jayin$ time php bad2.php

real    0m0.111s
user    0m0.100s
sys     0m0.009s
jayin:ex1 jayin$ time php good2.php

real    0m0.097s
user    0m0.088s
sys     0m0.008s

```