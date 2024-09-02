## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,232,250|6616126|
|(short string) (true) String#slice and strict comparison|12,040,086|6020044|
|(long string) (true) String#startsWith|12,861,681|6430841|
|(long string) (true) String#slice and strict comparison|11,530,679|5765340|
|(short string) (false) String#startsWith|14,170,347|7085174|
|(short string) (false) String#slice and strict comparison|12,459,155|6229578|
|(long string) (false) String#startsWith|14,091,804|7045903|
|(long string) (false) String#slice and strict comparison|11,700,868|5850435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:23:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13232250.842478864,"samples":6616126},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12040086.859303113,"samples":6020044},{"name":"(long string) (true) String#startsWith","opsSec":12861681.60893003,"samples":6430841},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11530679.631101353,"samples":5765340},{"name":"(short string) (false) String#startsWith","opsSec":14170347.61115874,"samples":7085174},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12459155.557303542,"samples":6229578},{"name":"(long string) (false) String#startsWith","opsSec":14091804.333879985,"samples":7045903},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11700868.718915388,"samples":5850435}]}-->
