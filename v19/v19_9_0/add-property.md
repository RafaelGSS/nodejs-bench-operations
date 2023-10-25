## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,875,680|97|
|Using dot notation|714,497,402|96|
|Using define property (writable)|2,999,744|96|
|Using define property initialized (writable)|3,747,945|96|
|Using define property (getter)|1,595,186|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":714875679.9522846,"samples":7},{"name":"Using dot notation","opsSec":714497401.6350578,"samples":6},{"name":"Using define property (writable)","opsSec":2999743.605630906,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3747945.1541666393,"samples":6},{"name":"Using define property (getter)","opsSec":1595185.6850718383,"samples":5}]}-->
