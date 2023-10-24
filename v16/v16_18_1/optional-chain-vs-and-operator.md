## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|744,949,557|86|
|Using optional chain (obj.field?.field2) (undefined)|765,281,611|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|761,766,591|84|
|Using and operator (obj.field && obj.field.field2) (undefined)|759,524,116|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":744949556.9000267,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":765281611.2358072,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":761766590.7455347,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":759524115.5189598,"samples":6}]}-->
