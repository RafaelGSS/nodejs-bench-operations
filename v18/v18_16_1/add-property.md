## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|845,041,702|98|
|Using dot notation|843,967,677|99|
|Using define property (writable)|4,240,939|96|
|Using define property initialized (writable)|5,976,188|96|
|Using define property (getter)|2,227,444|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:52:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":845041702.0685122,"samples":6},{"name":"Using dot notation","opsSec":843967677.1027287,"samples":9},{"name":"Using define property (writable)","opsSec":4240938.847641912,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5976188.00320737,"samples":6},{"name":"Using define property (getter)","opsSec":2227444.047738555,"samples":4}]}-->
