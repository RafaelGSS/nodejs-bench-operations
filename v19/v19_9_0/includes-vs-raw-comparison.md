## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|706,302,375|93|
|using Array.includes (first item)|717,662,509|94|
|Using raw comparison|719,838,782|96|
|Using raw comparison (first item)|718,461,646|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:26:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":706302374.5670784,"samples":7},{"name":"using Array.includes (first item)","opsSec":717662508.9334534,"samples":7},{"name":"Using raw comparison","opsSec":719838782.2667984,"samples":7},{"name":"Using raw comparison (first item)","opsSec":718461645.6167814,"samples":7}]}-->
