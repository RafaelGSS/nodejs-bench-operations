## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|101,118,164|50559094|
|Using backtick (`)|101,032,893|50529804|
|Using array.join|10,741,906|5370955|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:51:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":50559094,"opsSec":101118164.13611327},{"name":"Using backtick (`)","samples":50529804,"opsSec":101032893.28648876},{"name":"Using array.join","samples":5370955,"opsSec":10741906.046978574}]}-->
