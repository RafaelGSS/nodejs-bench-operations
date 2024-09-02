## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,162,547|6581274|
|using Array.includes (first item)|14,288,815|7144408|
|Using raw comparison|15,331,449|7665725|
|Using raw comparison (first item)|15,276,335|7638168|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:39:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13162547.936451532,"samples":6581274},{"name":"using Array.includes (first item)","opsSec":14288815.331777383,"samples":7144408},{"name":"Using raw comparison","opsSec":15331449.339475438,"samples":7665725},{"name":"Using raw comparison (first item)","opsSec":15276335.841651304,"samples":7638168}]}-->
