## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|753,140,350|88|
|Using dot notation|614,948,566|86|
|Using define property (writable)|2,575,965|90|
|Using define property initialized (writable)|3,126,758|87|
|Using define property (getter)|1,331,850|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":753140349.7514814,"samples":6},{"name":"Using dot notation","opsSec":614948566.1799047,"samples":5},{"name":"Using define property (writable)","opsSec":2575964.549702672,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3126757.718347091,"samples":6},{"name":"Using define property (getter)","opsSec":1331849.7039262773,"samples":4}]}-->
