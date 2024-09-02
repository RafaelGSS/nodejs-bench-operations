## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,516,171|6758087|
|(short string) (true) String#slice and strict comparison|12,487,184|6243593|
|(long string) (true) String#startsWith|13,119,128|6559565|
|(long string) (true) String#slice and strict comparison|12,004,277|6002139|
|(short string) (false) String#startsWith|14,726,947|7363474|
|(short string) (false) String#slice and strict comparison|12,235,081|6117541|
|(long string) (false) String#startsWith|14,270,933|7135467|
|(long string) (false) String#slice and strict comparison|12,223,853|6111927|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:25:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13516171.560764048,"samples":6758087},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12487184.752097718,"samples":6243593},{"name":"(long string) (true) String#startsWith","opsSec":13119128.882968687,"samples":6559565},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12004277.372139372,"samples":6002139},{"name":"(short string) (false) String#startsWith","opsSec":14726947.239391102,"samples":7363474},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12235081.65669723,"samples":6117541},{"name":"(long string) (false) String#startsWith","opsSec":14270933.739074176,"samples":7135467},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12223853.659744522,"samples":6111927}]}-->
