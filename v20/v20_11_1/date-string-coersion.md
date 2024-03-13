## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,119,526|95|
|Using brackets {}|1,127,972|95|
|Using '' + |1,135,503|97|
|Using date.toString()|1,241,786|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:49:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Using String()","opsSec":1119525.7821298533,"samples":6},{"name":"Using brackets {}","opsSec":1127972.0434978097,"samples":4},{"name":"Using '' + ","opsSec":1135503.4884222962,"samples":4},{"name":"Using date.toString()","opsSec":1241786.0561446345,"samples":4}]}-->
