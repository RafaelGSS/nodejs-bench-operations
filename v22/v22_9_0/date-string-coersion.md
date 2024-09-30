## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|903,874|452296|
|Using brackets {}|887,984|443993|
|Using '' + |877,779|439731|
|Using date.toString()|1,118,504|559522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:11:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":903874.9867047966,"samples":452296},{"name":"Using brackets {}","opsSec":887984.8012205183,"samples":443993},{"name":"Using '' + ","opsSec":877779.545899901,"samples":439731},{"name":"Using date.toString()","opsSec":1118504.390978625,"samples":559522}]}-->
