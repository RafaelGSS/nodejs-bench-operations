## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,765,176|7882589|
|using Array.includes (first item)|16,764,663|8382332|
|Using raw comparison|17,540,672|8770337|
|Using raw comparison (first item)|17,441,275|8720638|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:41:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":15765176.889888177,"samples":7882589},{"name":"using Array.includes (first item)","opsSec":16764663.673150975,"samples":8382332},{"name":"Using raw comparison","opsSec":17540672.821780566,"samples":8770337},{"name":"Using raw comparison (first item)","opsSec":17441275.066098902,"samples":8720638}]}-->
