## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|9,806,071|4903036|
|Using indexof|9,812,153|4906077|
|Using RegExp.test|8,614,046|4307024|
|Using RegExp.text with cached regex pattern|8,781,520|4390761|
|Using new RegExp.test|3,503,431|1751716|
|Using new RegExp.test with cached regex pattern|4,030,836|2015419|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:10:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":9806071.490038946,"samples":4903036},{"name":"Using indexof","opsSec":9812153.214949338,"samples":4906077},{"name":"Using RegExp.test","opsSec":8614046.328964511,"samples":4307024},{"name":"Using RegExp.text with cached regex pattern","opsSec":8781520.226087332,"samples":4390761},{"name":"Using new RegExp.test","opsSec":3503431.1381551637,"samples":1751716},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4030836.8471823833,"samples":2015419}]}-->
