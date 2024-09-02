## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,071,958|7035980|
|(short string) (true) String#slice and strict comparison|13,039,760|6519881|
|(long string) (true) String#startsWith|13,526,689|6763345|
|(long string) (true) String#slice and strict comparison|12,794,353|6397177|
|(short string) (false) String#startsWith|14,197,602|7098802|
|(short string) (false) String#slice and strict comparison|12,920,841|6460421|
|(long string) (false) String#startsWith|13,997,842|6998922|
|(long string) (false) String#slice and strict comparison|12,467,770|6233886|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:29:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14071958.649059158,"samples":7035980},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13039760.383188805,"samples":6519881},{"name":"(long string) (true) String#startsWith","opsSec":13526689.161309754,"samples":6763345},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12794353.002363525,"samples":6397177},{"name":"(short string) (false) String#startsWith","opsSec":14197602.665358784,"samples":7098802},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12920841.069596656,"samples":6460421},{"name":"(long string) (false) String#startsWith","opsSec":13997842.628375342,"samples":6998922},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12467770.478817912,"samples":6233886}]}-->
