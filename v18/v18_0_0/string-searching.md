## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,967,379|4483690|
|Using indexof|9,296,826|4648414|
|Using RegExp.test|8,400,919|4200460|
|Using RegExp.text with cached regex pattern|8,564,586|4282294|
|Using new RegExp.test|3,360,559|1680280|
|Using new RegExp.test with cached regex pattern|3,661,272|1830637|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:08:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8967379.198053386,"samples":4483690},{"name":"Using indexof","opsSec":9296826.695083573,"samples":4648414},{"name":"Using RegExp.test","opsSec":8400919.360688102,"samples":4200460},{"name":"Using RegExp.text with cached regex pattern","opsSec":8564586.224837897,"samples":4282294},{"name":"Using new RegExp.test","opsSec":3360559.7549268687,"samples":1680280},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3661272.2739736005,"samples":1830637}]}-->
