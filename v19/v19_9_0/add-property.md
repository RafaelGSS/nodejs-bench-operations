## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|692,166,389|82|
|Using dot notation|581,809,482|85|
|Using define property (writable)|2,321,262|87|
|Using define property initialized (writable)|2,959,906|83|
|Using define property (getter)|1,267,400|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":692166388.5857795,"samples":6},{"name":"Using dot notation","opsSec":581809481.8956726,"samples":8},{"name":"Using define property (writable)","opsSec":2321262.309302133,"samples":6},{"name":"Using define property initialized (writable)","opsSec":2959905.7641658145,"samples":7},{"name":"Using define property (getter)","opsSec":1267399.9961745276,"samples":5}]}-->
