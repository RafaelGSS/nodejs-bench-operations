## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|152,549,011|76274521|
|Using backtick (`)|101,703,711|50867120|
|Using array.join|10,359,591|5180905|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:41:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":152549011.49019772,"samples":76274521},{"name":"Using backtick (`)","opsSec":101703711.80023633,"samples":50867120},{"name":"Using array.join","opsSec":10359591.84563238,"samples":5180905}]}-->
