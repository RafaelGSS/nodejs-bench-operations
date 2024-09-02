## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|9,006,879|4503440|
|Using indexof|8,881,962|4440982|
|Using RegExp.test|8,155,952|4077977|
|Using RegExp.text with cached regex pattern|8,399,742|4199872|
|Using new RegExp.test|3,433,650|1716826|
|Using new RegExp.test with cached regex pattern|4,011,182|2005592|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:11:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":9006879.459562901,"samples":4503440},{"name":"Using indexof","opsSec":8881962.98741817,"samples":4440982},{"name":"Using RegExp.test","opsSec":8155952.36870916,"samples":4077977},{"name":"Using RegExp.text with cached regex pattern","opsSec":8399742.303219333,"samples":4199872},{"name":"Using new RegExp.test","opsSec":3433650.434272435,"samples":1716826},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4011182.5720265172,"samples":2005592}]}-->
