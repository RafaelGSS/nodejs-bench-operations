## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,539,089|97|
|Using dot notation|702,037,131|96|
|Using define property (writable)|3,129,697|96|
|Using define property initialized (writable)|4,111,179|90|
|Using define property (getter)|1,691,106|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":714539089.1799048,"samples":9},{"name":"Using dot notation","opsSec":702037131.2676511,"samples":7},{"name":"Using define property (writable)","opsSec":3129697.2679763143,"samples":8},{"name":"Using define property initialized (writable)","opsSec":4111179.1929265754,"samples":5},{"name":"Using define property (getter)","opsSec":1691106.0682765488,"samples":4}]}-->
