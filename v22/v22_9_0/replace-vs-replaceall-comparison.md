## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,236,096|1618158|
|Using replaceAll()|3,160,453|1580229|
|Using replaceAll(//g)|2,913,044|1456855|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:37:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3236096.3078938494,"samples":1618158},{"name":"Using replaceAll()","opsSec":3160453.935656239,"samples":1580229},{"name":"Using replaceAll(//g)","opsSec":2913044.4276091796,"samples":1456855}]}-->
