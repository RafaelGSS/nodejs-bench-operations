## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|847,064,487|91|
|Using dot notation|680,391,326|99|
|Using define property (writable)|4,519,380|96|
|Using define property initialized (writable)|6,443,327|96|
|Using define property (getter)|2,469,749|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:57:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":847064487.0915711,"samples":6},{"name":"Using dot notation","opsSec":680391326.4644071,"samples":8},{"name":"Using define property (writable)","opsSec":4519379.650730098,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6443326.920516256,"samples":5},{"name":"Using define property (getter)","opsSec":2469748.8582799397,"samples":4}]}-->
