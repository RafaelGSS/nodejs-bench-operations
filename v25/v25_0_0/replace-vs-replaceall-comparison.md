## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,404,473|2202465|
|Using replaceAll()|2,979,314|1489658|
|Using replaceAll(//g)|3,712,610|1856619|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:53:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":2202465,"opsSec":4404473.458708111},{"name":"Using replaceAll()","samples":1489658,"opsSec":2979314.0217354894},{"name":"Using replaceAll(//g)","samples":1856619,"opsSec":3712610.776684944}]}-->
