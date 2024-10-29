## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|146,826,651|73455018|
|Using backtick (`)|85,889,756|42945317|
|Using array.join|10,115,028|5057516|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:42:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":146826651.38275993,"samples":73455018},{"name":"Using backtick (`)","opsSec":85889756.55024709,"samples":42945317},{"name":"Using array.join","opsSec":10115028.56089029,"samples":5057516}]}-->
