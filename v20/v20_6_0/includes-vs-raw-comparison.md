## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,260,922|96|
|using Array.includes (first item)|713,371,568|98|
|Using raw comparison|716,852,867|96|
|Using raw comparison (first item)|717,460,752|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":712260921.5684067,"samples":7},{"name":"using Array.includes (first item)","opsSec":713371567.6199031,"samples":7},{"name":"Using raw comparison","opsSec":716852866.6311618,"samples":6},{"name":"Using raw comparison (first item)","opsSec":717460752.2979897,"samples":6}]}-->
