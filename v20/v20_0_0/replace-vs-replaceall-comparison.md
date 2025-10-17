## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,422,561|1711282|
|Using replaceAll()|3,033,094|1516762|
|Using replaceAll(//g)|2,989,919|1495150|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:54:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":1711282,"opsSec":3422561.9327725926},{"name":"Using replaceAll()","samples":1516762,"opsSec":3033094.0710478052},{"name":"Using replaceAll(//g)","samples":1495150,"opsSec":2989919.0185388196}]}-->
