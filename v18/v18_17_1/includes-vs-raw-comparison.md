## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|763,863,292|83|
|using Array.includes (first item)|755,063,585|88|
|Using raw comparison|753,269,747|85|
|Using raw comparison (first item)|738,311,208|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":763863291.9535702,"samples":7},{"name":"using Array.includes (first item)","opsSec":755063584.7079412,"samples":8},{"name":"Using raw comparison","opsSec":753269746.9506811,"samples":6},{"name":"Using raw comparison (first item)","opsSec":738311208.2220647,"samples":7}]}-->
