## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,111,875|98|
|Using dot notation|848,165,697|98|
|Using define property (writable)|4,356,678|96|
|Using define property initialized (writable)|6,044,127|96|
|Using define property (getter)|2,245,220|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:52:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":848111875.0478922,"samples":6},{"name":"Using dot notation","opsSec":848165696.608328,"samples":7},{"name":"Using define property (writable)","opsSec":4356677.940564595,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6044127.367365343,"samples":5},{"name":"Using define property (getter)","opsSec":2245219.8856632523,"samples":4}]}-->
