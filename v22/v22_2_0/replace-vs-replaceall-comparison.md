## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,874,237|1437119|
|Using replaceAll()|2,661,100|1330552|
|Using replaceAll(//g)|2,657,931|1328966|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:33:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2874237.344673647,"samples":1437119},{"name":"Using replaceAll()","opsSec":2661100.929088934,"samples":1330552},{"name":"Using replaceAll(//g)","opsSec":2657931.4684123853,"samples":1328966}]}-->
