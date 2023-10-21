## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,369,661|86|
|Using delete property (proto: null)|14,902,480|85|
|Using delete property (cached proto: null)|2,332,039|83|
|Using undefined assignment|840,930,145|84|
|Using undefined assignment (proto: null)|16,573,372|85|
|Using undefined property (cached proto: null)|709,584,368|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2369661.455943401,"samples":5},{"name":"Using delete property (proto: null)","opsSec":14902480.435429728,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2332039.4497538307,"samples":6},{"name":"Using undefined assignment","opsSec":840930144.985142,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":16573371.601588473,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":709584368.0869982,"samples":6}]}-->
