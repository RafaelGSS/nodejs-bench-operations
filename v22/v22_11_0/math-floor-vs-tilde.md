## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|137,155,659|68604898|
|~ (small)|97,172,246|48586127|
|Math.floor (long)|96,935,546|48468146|
|~ (long)|98,290,384|49150634|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:14:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":137155659.28972176,"samples":68604898},{"name":"~ (small)","opsSec":97172246.42056477,"samples":48586127},{"name":"Math.floor (long)","opsSec":96935546.1779077,"samples":48468146},{"name":"~ (long)","opsSec":98290384.50230484,"samples":49150634}]}-->
