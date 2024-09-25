## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,429,106|7214554|
|(short string) (true) String#slice and strict comparison|12,691,407|6345704|
|(long string) (true) String#endsWith|13,770,792|6885397|
|(long string) (true) String#slice and strict comparison|12,270,283|6135142|
|(short string) (false) String#endsWith|15,012,111|7506056|
|(short string) (false) String#slice and strict comparison|12,265,163|6132582|
|(long string) (false) String#endsWith|14,595,885|7297943|
|(long string) (false) String#slice and strict comparison|11,836,125|5918063|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:44:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14429106.903428447,"samples":7214554},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12691407.010122,"samples":6345704},{"name":"(long string) (true) String#endsWith","opsSec":13770792.237256037,"samples":6885397},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12270283.140902583,"samples":6135142},{"name":"(short string) (false) String#endsWith","opsSec":15012111.669288656,"samples":7506056},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12265163.116787303,"samples":6132582},{"name":"(long string) (false) String#endsWith","opsSec":14595885.620743882,"samples":7297943},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11836125.28995901,"samples":5918063}]}-->
