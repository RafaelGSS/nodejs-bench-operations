## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,818,548|84|
|Using replaceAll()|1,711,644|91|
|Using replaceAll(//g)|1,663,499|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1818548.4776414393,"samples":5},{"name":"Using replaceAll()","opsSec":1711643.6426983718,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1663498.8159040404,"samples":4}]}-->
