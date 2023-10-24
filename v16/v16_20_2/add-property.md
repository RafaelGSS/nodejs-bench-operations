## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|710,268,739|97|
|Using dot notation|697,465,135|96|
|Using define property (writable)|3,047,122|99|
|Using define property initialized (writable)|3,736,489|92|
|Using define property (getter)|1,536,490|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":710268738.668211,"samples":6},{"name":"Using dot notation","opsSec":697465134.8184451,"samples":5},{"name":"Using define property (writable)","opsSec":3047121.819636016,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3736489.4887863947,"samples":5},{"name":"Using define property (getter)","opsSec":1536489.9443602317,"samples":3}]}-->
