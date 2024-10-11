## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|128,521,829|64338024|
|(short string) (true) String#slice and strict comparison|50,908,536|25457083|
|(long string) (true) String#endsWith|55,608,429|27804220|
|(long string) (true) String#slice and strict comparison|46,077,236|23043525|
|(short string) (false) String#endsWith|95,740,357|47870187|
|(short string) (false) String#slice and strict comparison|51,102,766|25557367|
|(long string) (false) String#endsWith|86,852,165|43426088|
|(long string) (false) String#slice and strict comparison|45,174,660|22593992|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:39:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":128521829.00241953,"samples":64338024},{"name":"(short string) (true) String#slice and strict comparison","opsSec":50908536.635835886,"samples":25457083},{"name":"(long string) (true) String#endsWith","opsSec":55608429.65683208,"samples":27804220},{"name":"(long string) (true) String#slice and strict comparison","opsSec":46077236.28590688,"samples":23043525},{"name":"(short string) (false) String#endsWith","opsSec":95740357.34117782,"samples":47870187},{"name":"(short string) (false) String#slice and strict comparison","opsSec":51102766.24317351,"samples":25557367},{"name":"(long string) (false) String#endsWith","opsSec":86852165.75144444,"samples":43426088},{"name":"(long string) (false) String#slice and strict comparison","opsSec":45174660.99862897,"samples":22593992}]}-->
