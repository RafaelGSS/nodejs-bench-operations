## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|143,098,427|78|
|Using dot notation|147,078,262|85|
|Using define property (writable)|4,893,416|94|
|Using define property initialized (writable)|7,731,782|95|
|Using define property (getter)|2,701,898|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:21:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":143098426.87349737,"samples":7},{"name":"Using dot notation","opsSec":147078261.58979377,"samples":6},{"name":"Using define property (writable)","opsSec":4893416.468456979,"samples":5},{"name":"Using define property initialized (writable)","opsSec":7731782.219340368,"samples":4},{"name":"Using define property (getter)","opsSec":2701898.3411655263,"samples":4}]}-->
