## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|95,777,320|48220588|
|Using dot notation|66,400,106|33201813|
|Using define property (writable)|4,772,191|2386333|
|Using define property initialized (writable)|6,705,913|3362927|
|Using define property (getter)|2,340,864|1170466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:40:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Directly in the object","opsSec":95777320.02523898,"samples":48220588},{"name":"Using dot notation","opsSec":66400106.13037403,"samples":33201813},{"name":"Using define property (writable)","opsSec":4772191.195609184,"samples":2386333},{"name":"Using define property initialized (writable)","opsSec":6705913.229362037,"samples":3362927},{"name":"Using define property (getter)","opsSec":2340864.952946018,"samples":1170466}]}-->
