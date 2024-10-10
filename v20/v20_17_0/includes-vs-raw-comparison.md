## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|87,077,700|43604642|
|using Array.includes (first item)|86,026,026|43013027|
|Using raw comparison|97,573,919|48800616|
|Using raw comparison (first item)|98,017,971|49008990|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:24:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":87077700.01672772,"samples":43604642},{"name":"using Array.includes (first item)","opsSec":86026026.98782752,"samples":43013027},{"name":"Using raw comparison","opsSec":97573919.49874958,"samples":48800616},{"name":"Using raw comparison (first item)","opsSec":98017971.37441853,"samples":49008990}]}-->
