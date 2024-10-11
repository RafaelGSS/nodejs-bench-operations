## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|102,251,541|51131063|
|Using dot notation|67,580,880|33885377|
|Using define property (writable)|4,702,177|2351089|
|Using define property initialized (writable)|6,688,494|3345124|
|Using define property (getter)|2,368,436|1184249|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:41:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Directly in the object","opsSec":102251541.12496583,"samples":51131063},{"name":"Using dot notation","opsSec":67580880.9195566,"samples":33885377},{"name":"Using define property (writable)","opsSec":4702177.012542827,"samples":2351089},{"name":"Using define property initialized (writable)","opsSec":6688494.7047520755,"samples":3345124},{"name":"Using define property (getter)","opsSec":2368436.1932890997,"samples":1184249}]}-->
