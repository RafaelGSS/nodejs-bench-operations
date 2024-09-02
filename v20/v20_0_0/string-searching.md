## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,037,994|4018998|
|Using indexof|8,158,334|4079168|
|Using RegExp.test|7,468,807|3734404|
|Using RegExp.text with cached regex pattern|7,334,131|3667066|
|Using new RegExp.test|3,300,483|1650242|
|Using new RegExp.test with cached regex pattern|3,675,042|1837522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:10:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8037994.742297831,"samples":4018998},{"name":"Using indexof","opsSec":8158334.715201611,"samples":4079168},{"name":"Using RegExp.test","opsSec":7468807.1661861045,"samples":3734404},{"name":"Using RegExp.text with cached regex pattern","opsSec":7334131.188324924,"samples":3667066},{"name":"Using new RegExp.test","opsSec":3300483.084347575,"samples":1650242},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3675042.2115148962,"samples":1837522}]}-->
