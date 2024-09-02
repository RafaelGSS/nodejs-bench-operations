## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,014,742|7007372|
|(short string) (true) String#slice and strict comparison|12,682,673|6341337|
|(long string) (true) String#startsWith|13,198,303|6599152|
|(long string) (true) String#slice and strict comparison|12,197,428|6098715|
|(short string) (false) String#startsWith|14,558,327|7279164|
|(short string) (false) String#slice and strict comparison|12,812,689|6406346|
|(long string) (false) String#startsWith|14,612,002|7306002|
|(long string) (false) String#slice and strict comparison|12,619,271|6309636|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:18:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14014742.460148223,"samples":7007372},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12682673.154474143,"samples":6341337},{"name":"(long string) (true) String#startsWith","opsSec":13198303.786416322,"samples":6599152},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12197428.489336269,"samples":6098715},{"name":"(short string) (false) String#startsWith","opsSec":14558327.016520746,"samples":7279164},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12812689.752252273,"samples":6406346},{"name":"(long string) (false) String#startsWith","opsSec":14612002.470514845,"samples":7306002},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12619271.543622553,"samples":6309636}]}-->
