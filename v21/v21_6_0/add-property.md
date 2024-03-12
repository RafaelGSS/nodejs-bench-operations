## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|817,581,071|98|
|Using dot notation|820,104,302|96|
|Using define property (writable)|4,099,457|96|
|Using define property initialized (writable)|6,172,751|93|
|Using define property (getter)|2,314,756|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":817581070.7789321,"samples":6},{"name":"Using dot notation","opsSec":820104301.6098821,"samples":6},{"name":"Using define property (writable)","opsSec":4099457.1038036263,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6172750.552243146,"samples":5},{"name":"Using define property (getter)","opsSec":2314756.268737747,"samples":4}]}-->
