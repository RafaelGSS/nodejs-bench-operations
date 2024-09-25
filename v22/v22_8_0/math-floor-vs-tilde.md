## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,085,722|7542862|
|~ (small)|15,339,615|7669810|
|Math.floor (long)|14,327,293|7163647|
|~ (long)|14,268,305|7134153|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:58:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":15085722.491448697,"samples":7542862},{"name":"~ (small)","opsSec":15339615.551323708,"samples":7669810},{"name":"Math.floor (long)","opsSec":14327293.741918065,"samples":7163647},{"name":"~ (long)","opsSec":14268305.172243573,"samples":7134153}]}-->
