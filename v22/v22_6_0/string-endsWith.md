## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,700,923|7350462|
|(short string) (true) String#slice and strict comparison|13,423,954|6711978|
|(long string) (true) String#endsWith|14,061,963|7030982|
|(long string) (true) String#slice and strict comparison|12,838,568|6419285|
|(short string) (false) String#endsWith|14,564,113|7282057|
|(short string) (false) String#slice and strict comparison|13,465,057|6732529|
|(long string) (false) String#endsWith|14,727,193|7363597|
|(long string) (false) String#slice and strict comparison|13,043,980|6521991|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:04:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14700923.735155985,"samples":7350462},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13423954.201183764,"samples":6711978},{"name":"(long string) (true) String#endsWith","opsSec":14061963.043790692,"samples":7030982},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12838568.587845346,"samples":6419285},{"name":"(short string) (false) String#endsWith","opsSec":14564113.475350307,"samples":7282057},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13465057.380642029,"samples":6732529},{"name":"(long string) (false) String#endsWith","opsSec":14727193.322666533,"samples":7363597},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13043980.173984898,"samples":6521991}]}-->
