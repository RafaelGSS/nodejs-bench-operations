## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|13,732,333|6866167|
|~ (small)|14,254,505|7127253|
|Math.floor (long)|14,080,506|7040254|
|~ (long)|14,375,485|7187743|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:55:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":13732333.258447759,"samples":6866167},{"name":"~ (small)","opsSec":14254505.48674916,"samples":7127253},{"name":"Math.floor (long)","opsSec":14080506.761007499,"samples":7040254},{"name":"~ (long)","opsSec":14375485.281155938,"samples":7187743}]}-->
