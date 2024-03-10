## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|848,064,151|99|
|Using dot notation|843,427,170|98|
|Using define property (writable)|4,236,892|92|
|Using define property initialized (writable)|6,193,798|96|
|Using define property (getter)|2,356,714|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":848064150.7195677,"samples":8},{"name":"Using dot notation","opsSec":843427170.3590678,"samples":8},{"name":"Using define property (writable)","opsSec":4236891.778481218,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6193797.802056683,"samples":5},{"name":"Using define property (getter)","opsSec":2356714.246597577,"samples":4}]}-->
