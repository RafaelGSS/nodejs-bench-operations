## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|18,268,178|9134090|
|~ (small)|18,492,944|9246473|
|Math.floor (long)|16,471,174|8235588|
|~ (long)|16,590,781|8295391|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:52:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":18268178.28260238,"samples":9134090},{"name":"~ (small)","opsSec":18492944.927416906,"samples":9246473},{"name":"Math.floor (long)","opsSec":16471174.7152006,"samples":8235588},{"name":"~ (long)","opsSec":16590781.070937553,"samples":8295391}]}-->
