## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|139,584,953|69800791|
|~ (small)|93,191,462|46596005|
|Math.floor (long)|94,132,130|47066072|
|~ (long)|93,807,310|46903662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:12:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":139584953.8027933,"samples":69800791},{"name":"~ (small)","opsSec":93191462.03420323,"samples":46596005},{"name":"Math.floor (long)","opsSec":94132130.06844474,"samples":47066072},{"name":"~ (long)","opsSec":93807310.67936188,"samples":46903662}]}-->
