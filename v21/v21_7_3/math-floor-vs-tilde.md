## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,856,555|7428280|
|~ (small)|14,584,729|7292365|
|Math.floor (long)|14,368,462|7184232|
|~ (long)|14,679,621|7339811|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:56:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":14856555.037842836,"samples":7428280},{"name":"~ (small)","opsSec":14584729.12496392,"samples":7292365},{"name":"Math.floor (long)","opsSec":14368462.76440807,"samples":7184232},{"name":"~ (long)","opsSec":14679621.618376918,"samples":7339811}]}-->
