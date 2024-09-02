## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,206,163|7603082|
|~ (small)|13,950,187|6975094|
|Math.floor (long)|14,171,085|7085543|
|~ (long)|14,417,412|7208707|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:16:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":15206163.665546933,"samples":7603082},{"name":"~ (small)","opsSec":13950187.274672132,"samples":6975094},{"name":"Math.floor (long)","opsSec":14171085.999930196,"samples":7085543},{"name":"~ (long)","opsSec":14417412.269854344,"samples":7208707}]}-->
