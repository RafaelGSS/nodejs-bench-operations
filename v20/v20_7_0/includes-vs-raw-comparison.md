## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|848,828,293|97|
|using Array.includes (first item)|852,244,473|97|
|Using raw comparison|852,668,252|98|
|Using raw comparison (first item)|852,088,124|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:17:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":848828293.131362,"samples":6},{"name":"using Array.includes (first item)","opsSec":852244473.3054597,"samples":8},{"name":"Using raw comparison","opsSec":852668252.357157,"samples":6},{"name":"Using raw comparison (first item)","opsSec":852088124.1278126,"samples":7}]}-->
