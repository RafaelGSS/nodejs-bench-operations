## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|138,544,058|69375634|
|~ (small)|97,235,783|48694531|
|Math.floor (long)|98,100,371|49064351|
|~ (long)|98,071,277|49046853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:18:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":138544058.45820063,"samples":69375634},{"name":"~ (small)","opsSec":97235783.59464431,"samples":48694531},{"name":"Math.floor (long)","opsSec":98100371.39754336,"samples":49064351},{"name":"~ (long)","opsSec":98071277.49112289,"samples":49046853}]}-->
