## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,285,507|6642754|
|using Array.includes (first item)|14,484,499|7242250|
|Using raw comparison|15,039,123|7519562|
|Using raw comparison (first item)|13,874,033|6937017|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:48:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13285507.016859388,"samples":6642754},{"name":"using Array.includes (first item)","opsSec":14484499.594380548,"samples":7242250},{"name":"Using raw comparison","opsSec":15039123.458446167,"samples":7519562},{"name":"Using raw comparison (first item)","opsSec":13874033.944396134,"samples":6937017}]}-->
