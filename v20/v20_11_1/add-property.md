## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|845,888,325|93|
|Using dot notation|842,709,181|95|
|Using define property (writable)|4,254,948|96|
|Using define property initialized (writable)|6,268,699|97|
|Using define property (getter)|2,416,316|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:19:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Directly in the object","opsSec":845888325.3857173,"samples":6},{"name":"Using dot notation","opsSec":842709180.990496,"samples":6},{"name":"Using define property (writable)","opsSec":4254948.429671981,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6268699.447530683,"samples":4},{"name":"Using define property (getter)","opsSec":2416316.2948533967,"samples":4}]}-->
