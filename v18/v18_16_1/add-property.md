## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|591,391,522|96|
|Using dot notation|595,081,085|94|
|Using define property (writable)|2,960,802|96|
|Using define property initialized (writable)|4,229,116|97|
|Using define property (getter)|1,559,280|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":591391522.358185,"samples":7},{"name":"Using dot notation","opsSec":595081084.7213998,"samples":9},{"name":"Using define property (writable)","opsSec":2960801.7061163685,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4229115.713580088,"samples":6},{"name":"Using define property (getter)","opsSec":1559280.2059705523,"samples":4}]}-->
