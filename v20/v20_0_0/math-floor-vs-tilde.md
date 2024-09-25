## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,485,785|7242893|
|~ (small)|14,318,657|7159329|
|Math.floor (long)|14,421,111|7210556|
|~ (long)|14,425,688|7212845|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:53:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":14485785.6124323,"samples":7242893},{"name":"~ (small)","opsSec":14318657.548973855,"samples":7159329},{"name":"Math.floor (long)","opsSec":14421111.783899926,"samples":7210556},{"name":"~ (long)","opsSec":14425688.725128869,"samples":7212845}]}-->
