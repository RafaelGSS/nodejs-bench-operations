## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|713,283,080|96|
|Using dot notation|707,542,860|95|
|Using define property (writable)|3,076,464|98|
|Using define property initialized (writable)|3,734,601|95|
|Using define property (getter)|1,536,237|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":713283079.6197867,"samples":8},{"name":"Using dot notation","opsSec":707542860.3084638,"samples":8},{"name":"Using define property (writable)","opsSec":3076464.3946698313,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3734601.4194992417,"samples":4},{"name":"Using define property (getter)","opsSec":1536236.6467177353,"samples":3}]}-->
