## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|142,459,899|71231304|
|~ (small)|95,391,820|47725888|
|Math.floor (long)|95,458,726|47729371|
|~ (long)|97,514,652|48757890|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:30:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":142459899.5523897,"samples":71231304},{"name":"~ (small)","opsSec":95391820.71441187,"samples":47725888},{"name":"Math.floor (long)","opsSec":95458726.72660373,"samples":47729371},{"name":"~ (long)","opsSec":97514652.92564149,"samples":48757890}]}-->
