## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,483,195|4241598|
|Using indexof|8,663,066|4331534|
|Using RegExp.test|7,868,213|3934107|
|Using RegExp.text with cached regex pattern|8,108,127|4054064|
|Using new RegExp.test|3,182,505|1591253|
|Using new RegExp.test with cached regex pattern|3,546,703|1773352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:07:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8483195.78586236,"samples":4241598},{"name":"Using indexof","opsSec":8663066.980061825,"samples":4331534},{"name":"Using RegExp.test","opsSec":7868213.497192597,"samples":3934107},{"name":"Using RegExp.text with cached regex pattern","opsSec":8108127.517503274,"samples":4054064},{"name":"Using new RegExp.test","opsSec":3182505.4497269094,"samples":1591253},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3546703.701423905,"samples":1773352}]}-->
