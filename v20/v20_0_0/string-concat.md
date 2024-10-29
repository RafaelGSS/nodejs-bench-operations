## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|151,945,782|76008331|
|Using backtick (`)|100,168,656|50084444|
|Using array.join|10,793,883|5397616|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:41:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":151945782.02770814,"samples":76008331},{"name":"Using backtick (`)","opsSec":100168656.20972952,"samples":50084444},{"name":"Using array.join","opsSec":10793883.88707804,"samples":5397616}]}-->
