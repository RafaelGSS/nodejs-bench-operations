## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,386,517|7193259|
|(short string) (true) String#slice and strict comparison|14,212,518|7106260|
|(long string) (true) String#endsWith|13,517,725|6758863|
|(long string) (true) String#slice and strict comparison|13,579,221|6789611|
|(short string) (false) String#endsWith|14,830,462|7415232|
|(short string) (false) String#slice and strict comparison|14,657,651|7328827|
|(long string) (false) String#endsWith|14,637,711|7318856|
|(long string) (false) String#slice and strict comparison|14,111,782|7055892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:57:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14386517.107983299,"samples":7193259},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14212518.123974895,"samples":7106260},{"name":"(long string) (true) String#endsWith","opsSec":13517725.756552009,"samples":6758863},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13579221.484032487,"samples":6789611},{"name":"(short string) (false) String#endsWith","opsSec":14830462.101656832,"samples":7415232},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14657651.185567275,"samples":7328827},{"name":"(long string) (false) String#endsWith","opsSec":14637711.033874108,"samples":7318856},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14111782.250095695,"samples":7055892}]}-->
