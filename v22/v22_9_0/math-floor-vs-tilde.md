## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,276,378|7638190|
|~ (small)|15,463,406|7731704|
|Math.floor (long)|15,142,725|7571363|
|~ (long)|15,204,422|7602212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:58:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":15276378.686248606,"samples":7638190},{"name":"~ (small)","opsSec":15463406.453925367,"samples":7731704},{"name":"Math.floor (long)","opsSec":15142725.54568172,"samples":7571363},{"name":"~ (long)","opsSec":15204422.509902038,"samples":7602212}]}-->
