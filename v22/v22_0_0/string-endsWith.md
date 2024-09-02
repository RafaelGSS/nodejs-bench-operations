## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,296,237|7148119|
|(short string) (true) String#slice and strict comparison|12,266,352|6133177|
|(long string) (true) String#endsWith|13,797,098|6898550|
|(long string) (true) String#slice and strict comparison|12,752,873|6376437|
|(short string) (false) String#endsWith|14,264,283|7132142|
|(short string) (false) String#slice and strict comparison|12,762,692|6381347|
|(long string) (false) String#endsWith|13,570,017|6785009|
|(long string) (false) String#slice and strict comparison|12,763,013|6381507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:03:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14296237.085082332,"samples":7148119},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12266352.552546525,"samples":6133177},{"name":"(long string) (true) String#endsWith","opsSec":13797098.123480381,"samples":6898550},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12752873.719715236,"samples":6376437},{"name":"(short string) (false) String#endsWith","opsSec":14264283.999643391,"samples":7132142},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12762692.187474415,"samples":6381347},{"name":"(long string) (false) String#endsWith","opsSec":13570017.674368635,"samples":6785009},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12763013.43817686,"samples":6381507}]}-->
