## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|7,774,869|3887435|
|Using indexof|7,870,278|3935140|
|Using RegExp.test|7,483,650|3741826|
|Using RegExp.text with cached regex pattern|7,187,341|3593671|
|Using new RegExp.test|3,306,065|1653033|
|Using new RegExp.test with cached regex pattern|3,669,965|1834983|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:15:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":7774869.8755838815,"samples":3887435},{"name":"Using indexof","opsSec":7870278.158364853,"samples":3935140},{"name":"Using RegExp.test","opsSec":7483650.159019695,"samples":3741826},{"name":"Using RegExp.text with cached regex pattern","opsSec":7187341.252539109,"samples":3593671},{"name":"Using new RegExp.test","opsSec":3306065.6561713647,"samples":1653033},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3669965.7137459954,"samples":1834983}]}-->
