## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,632,078|21818819|
|Object.create({})|1,837,072|920653|
|Cached Empty.prototype|101,143,589|50572051|
|Empty.prototype|2,075,677|1038882|
|Empty class|1,395,702|697944|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:20:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":43632078.40057019,"samples":21818819},{"name":"Object.create({})","opsSec":1837072.470166646,"samples":920653},{"name":"Cached Empty.prototype","opsSec":101143589.60657506,"samples":50572051},{"name":"Empty.prototype","opsSec":2075677.0064025584,"samples":1038882},{"name":"Empty class","opsSec":1395702.2069136202,"samples":697944}]}-->
