## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|138,961,287|69483505|
|~ (small)|96,156,888|48078872|
|Math.floor (long)|98,592,829|49312884|
|~ (long)|95,472,506|47741867|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:18:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":138961287.8520888,"samples":69483505},{"name":"~ (small)","opsSec":96156888.78063118,"samples":48078872},{"name":"Math.floor (long)","opsSec":98592829.71307814,"samples":49312884},{"name":"~ (long)","opsSec":95472506.81508859,"samples":47741867}]}-->
