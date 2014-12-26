使用数据库、Memcached、Redis存储session
---

实现关键
```php
// 1
bool session_set_save_handler ( callable $open , callable $close , callable $read , callable $write , callable $destroy , callable $gc [, callable $create_sid ] )

//2
bool session_set_save_handler ( SessionHandlerInterface $sessionhandler [, bool $register_shutdown = true ] )

```

see [demo](MemcacheSession.php)