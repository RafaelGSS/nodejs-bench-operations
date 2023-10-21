## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|698,759,773|95|
|Using dot notation|706,187,680|94|
|Using define property (writable)|2,900,254|97|
|Using define property initialized (writable)|3,758,843|92|
|Using define property (getter)|1,492,693|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":698759772.592362,"samples":6},{"name":"Using dot notation","opsSec":706187680.0460653,"samples":6},{"name":"Using define property (writable)","opsSec":2900254.164579769,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3758843.3797920495,"samples":7},{"name":"Using define property (getter)","opsSec":1492692.9832559023,"samples":4}]}-->
