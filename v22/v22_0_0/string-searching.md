## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,051,188|4025595|
|Using indexof|8,197,164|4098583|
|Using RegExp.test|7,590,803|3795402|
|Using RegExp.text with cached regex pattern|7,523,245|3761623|
|Using new RegExp.test|3,303,451|1651726|
|Using new RegExp.test with cached regex pattern|3,678,067|1839034|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:13:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8051188.212634382,"samples":4025595},{"name":"Using indexof","opsSec":8197164.180210536,"samples":4098583},{"name":"Using RegExp.test","opsSec":7590803.741899717,"samples":3795402},{"name":"Using RegExp.text with cached regex pattern","opsSec":7523245.172402517,"samples":3761623},{"name":"Using new RegExp.test","opsSec":3303451.365731739,"samples":1651726},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3678067.1981838625,"samples":1839034}]}-->
