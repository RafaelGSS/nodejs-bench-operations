## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|705,182,200|92|
|using Array.includes (first item)|705,516,505|95|
|Using raw comparison|705,238,982|96|
|Using raw comparison (first item)|706,551,637|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":705182200.3960431,"samples":8},{"name":"using Array.includes (first item)","opsSec":705516504.7455442,"samples":9},{"name":"Using raw comparison","opsSec":705238982.1986774,"samples":7},{"name":"Using raw comparison (first item)","opsSec":706551636.9561957,"samples":6}]}-->
