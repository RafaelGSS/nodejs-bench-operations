## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,271,159|4135580|
|Using indexof|8,189,523|4094762|
|Using RegExp.test|7,469,803|3734902|
|Using RegExp.text with cached regex pattern|7,488,510|3744256|
|Using new RegExp.test|3,379,168|1689585|
|Using new RegExp.test with cached regex pattern|3,750,402|1875202|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:15:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8271159.00740949,"samples":4135580},{"name":"Using indexof","opsSec":8189523.377593927,"samples":4094762},{"name":"Using RegExp.test","opsSec":7469803.073705572,"samples":3734902},{"name":"Using RegExp.text with cached regex pattern","opsSec":7488510.651929558,"samples":3744256},{"name":"Using new RegExp.test","opsSec":3379168.7632204946,"samples":1689585},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3750402.754873204,"samples":1875202}]}-->
