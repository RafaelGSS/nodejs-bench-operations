## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,163,322|6581662|
|using Array.includes (first item)|13,261,183|6630592|
|Using raw comparison|14,728,988|7364495|
|Using raw comparison (first item)|14,627,696|7313849|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:47:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13163322.473121023,"samples":6581662},{"name":"using Array.includes (first item)","opsSec":13261183.999919143,"samples":6630592},{"name":"Using raw comparison","opsSec":14728988.762785103,"samples":7364495},{"name":"Using raw comparison (first item)","opsSec":14627696.274069507,"samples":7313849}]}-->
