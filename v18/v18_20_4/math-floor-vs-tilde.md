## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,697,149|7348575|
|~ (small)|15,285,317|7642659|
|Math.floor (long)|15,299,511|7649756|
|~ (long)|15,008,973|7504488|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:10:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":14697149.860494072,"samples":7348575},{"name":"~ (small)","opsSec":15285317.545600884,"samples":7642659},{"name":"Math.floor (long)","opsSec":15299511.702770436,"samples":7649756},{"name":"~ (long)","opsSec":15008973.576907694,"samples":7504488}]}-->
