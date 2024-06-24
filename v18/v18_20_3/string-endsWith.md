## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,025,411|7012706|
|(short string) (true) String#slice and strict comparison|16,696,518|8348260|
|(long string) (true) String#endsWith|13,992,560|6996281|
|(long string) (true) String#slice and strict comparison|16,679,334|8339668|
|(short string) (false) String#endsWith|14,612,870|7306436|
|(short string) (false) String#slice and strict comparison|17,027,140|8513571|
|(long string) (false) String#endsWith|14,331,148|7165575|
|(long string) (false) String#slice and strict comparison|16,972,788|8486395|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:32:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14025411.414709738,"samples":7012706},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16696518.182720795,"samples":8348260},{"name":"(long string) (true) String#endsWith","opsSec":13992560.100776495,"samples":6996281},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16679334.907101074,"samples":8339668},{"name":"(short string) (false) String#endsWith","opsSec":14612870.365795732,"samples":7306436},{"name":"(short string) (false) String#slice and strict comparison","opsSec":17027140.506516133,"samples":8513571},{"name":"(long string) (false) String#endsWith","opsSec":14331148.822000628,"samples":7165575},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16972788.51697402,"samples":8486395}]}-->
