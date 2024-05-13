## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,987,489|7993745|
|Using dot notation|16,059,253|8029627|
|Using define property (writable)|3,706,344|1853173|
|Using define property initialized (writable)|4,510,278|2255140|
|Using define property (getter)|2,144,964|1072483|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:35:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15987489.936043411,"samples":7993745},{"name":"Using dot notation","opsSec":16059253.93576264,"samples":8029627},{"name":"Using define property (writable)","opsSec":3706344.3543876735,"samples":1853173},{"name":"Using define property initialized (writable)","opsSec":4510278.457480487,"samples":2255140},{"name":"Using define property (getter)","opsSec":2144964.785945548,"samples":1072483}]}-->
