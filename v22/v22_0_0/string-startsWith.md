## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,832,463|6916232|
|(short string) (true) String#slice and strict comparison|12,960,677|6480339|
|(long string) (true) String#startsWith|12,963,944|6481973|
|(long string) (true) String#slice and strict comparison|13,102,267|6551134|
|(short string) (false) String#startsWith|14,287,717|7143859|
|(short string) (false) String#slice and strict comparison|13,410,857|6705429|
|(long string) (false) String#startsWith|14,210,376|7105189|
|(long string) (false) String#slice and strict comparison|13,223,485|6611743|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:30:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13832463.004085677,"samples":6916232},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12960677.714815015,"samples":6480339},{"name":"(long string) (true) String#startsWith","opsSec":12963944.158906508,"samples":6481973},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13102267.86892637,"samples":6551134},{"name":"(short string) (false) String#startsWith","opsSec":14287717.88561048,"samples":7143859},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13410857.061422547,"samples":6705429},{"name":"(long string) (false) String#startsWith","opsSec":14210376.323067702,"samples":7105189},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13223485.10103824,"samples":6611743}]}-->
