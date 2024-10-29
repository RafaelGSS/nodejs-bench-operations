## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|139,339,080|69669586|
|Using indexof|14,725,078|7363173|
|Using RegExp.test|12,807,586|6403795|
|Using RegExp.text with cached regex pattern|13,448,037|6724020|
|Using new RegExp.test|4,390,967|2195579|
|Using new RegExp.test with cached regex pattern|5,180,568|2590286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:52:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":139339080.31488514,"samples":69669586},{"name":"Using indexof","opsSec":14725078.082426636,"samples":7363173},{"name":"Using RegExp.test","opsSec":12807586.951794306,"samples":6403795},{"name":"Using RegExp.text with cached regex pattern","opsSec":13448037.391080745,"samples":6724020},{"name":"Using new RegExp.test","opsSec":4390967.361761021,"samples":2195579},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5180568.352879879,"samples":2590286}]}-->
