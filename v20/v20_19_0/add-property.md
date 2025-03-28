## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|104,948,335|52478240|
|Using dot notation|74,031,525|37126578|
|Using define property (writable)|4,322,170|2161087|
|Using define property initialized (writable)|5,818,997|2909624|
|Using define property (getter)|1,976,322|992115|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Mar 28 2025 18:56:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.5978851318359375},"benchmarks":[{"name":"Directly in the object","opsSec":104948335.79924531,"samples":52478240},{"name":"Using dot notation","opsSec":74031525.89610516,"samples":37126578},{"name":"Using define property (writable)","opsSec":4322170.62870691,"samples":2161087},{"name":"Using define property initialized (writable)","opsSec":5818997.95765776,"samples":2909624},{"name":"Using define property (getter)","opsSec":1976322.3941734603,"samples":992115}]}-->
