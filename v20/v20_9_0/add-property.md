## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|851,030,980|99|
|Using dot notation|849,606,269|99|
|Using define property (writable)|4,635,975|97|
|Using define property initialized (writable)|6,299,871|91|
|Using define property (getter)|2,426,185|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:17:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":851030980.0887882,"samples":6},{"name":"Using dot notation","opsSec":849606269.0402344,"samples":6},{"name":"Using define property (writable)","opsSec":4635974.551298018,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6299871.10605873,"samples":6},{"name":"Using define property (getter)","opsSec":2426184.601857074,"samples":4}]}-->
