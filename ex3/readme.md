尽量使用===而非==
---

php会尝试类型转换

```shell

jayin:ex3 jayin$ time php bad1.php

real    0m0.103s
user    0m0.093s
sys     0m0.009s
jayin:ex3 jayin$ time php good1.php

real    0m0.097s
user    0m0.087s
sys     0m0.008s


```