## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|656,431,741|86|
|Using dot notation|656,346,861|89|
|Using define property (writable)|2,701,164|87|
|Using define property initialized (writable)|3,600,623|84|
|Using define property (getter)|1,466,816|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":656431741.1529161,"samples":6},{"name":"Using dot notation","opsSec":656346861.0132911,"samples":8},{"name":"Using define property (writable)","opsSec":2701164.2349922196,"samples":3},{"name":"Using define property initialized (writable)","opsSec":3600622.7051899326,"samples":5},{"name":"Using define property (getter)","opsSec":1466815.6521034078,"samples":4}]}-->
