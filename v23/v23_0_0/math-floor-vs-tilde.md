## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|125,617,625|62877824|
|~ (small)|97,864,988|48943603|
|Math.floor (long)|95,753,477|47876773|
|~ (long)|94,855,938|47429719|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:14:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":125617625.38287531,"samples":62877824},{"name":"~ (small)","opsSec":97864988.8859531,"samples":48943603},{"name":"Math.floor (long)","opsSec":95753477.24900335,"samples":47876773},{"name":"~ (long)","opsSec":94855938.95412387,"samples":47429719}]}-->
