## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,411,273|7205637|
|~ (small)|14,082,236|7041119|
|Math.floor (long)|14,677,100|7338551|
|~ (long)|14,047,367|7023684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:17:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":14411273.481348693,"samples":7205637},{"name":"~ (small)","opsSec":14082236.620068524,"samples":7041119},{"name":"Math.floor (long)","opsSec":14677100.56163266,"samples":7338551},{"name":"~ (long)","opsSec":14047367.494423585,"samples":7023684}]}-->
